(ns myapp.example0
  (:import [org.opencv.imgcodecs Imgcodecs]
           [org.opencv.imgproc Imgproc]))

(defn img->gray [f]
  (let [img (Imgcodecs/imread f)]
    (Imgproc/cvtColor img img Imgproc/COLOR_RGB2GRAY)
    (Imgcodecs/imwrite "example0-gray.png" img)
    (println "generate generate example0-gray.png")))

(defn -main [& args]
  (let [arg1 (nth args 0)]
    (if arg1
      (img->gray arg1)
      (println "Error: Please specify filename."))))
