(ns twbank-forex.core
  (:require [clj-http.client :as http]
            [hickory.core    :as hickory]
            [hickory.select  :as s]
            [clojure.string  :as str]))

;; The webpage we want to parse
(def ^:private
  twbank-url "http://rate.bot.com.tw/Pages/Static/UIP003.zh-TW.htm")

(defn fetch-html []
  (:body (http/get twbank-url)))

(defn parse-date [html]
  (nth (re-find #"(.*牌價最新掛牌時間：&nbsp;)([\d\/]+\s[\d:]+)(.*)" html) 2))

(defn html->hickory [html]
  (->> html
       hickory/parse
       hickory/as-hickory))

(def A (html->hickory (fetch-html)))

(defn parse-data [data]
  (->> (s/select (s/child
                  (s/or (s/class "titleLeft")
                        (s/class "decimal")))
                 data)
       (map #(-> % :content last))
       (map #(str/replace % #" " ""))
       (partition 5)))

(defn build-data [data]
  (->> data
       (map #(zipmap [:name :cash-selling :cash-buying :spot-selling :spot-buying] %))
       (map #(hash-map (keyword
                        (nth (re-find #"(.*\()(.*)(\))" (:name %)) 2)) %))
       (into {})))


(defn fetch []
    (let [html (fetch-html)
          ctx (-> html html->hickory)
          data (-> ctx parse-data build-data)]
      {:url twbank-url
       :date (parse-date html)
       :count (count data)
       :results data}))

(defn -main []
  (clojure.pprint/pprint (fetch)))
