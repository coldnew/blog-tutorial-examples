(ns myapp.example1
  (:import [org.opencv.core Mat MatOfRect Point Scalar]
           [org.opencv.imgcodecs Imgcodecs]
           [org.opencv.imgproc Imgproc]
           [org.opencv.objdetect CascadeClassifier]))

(defn face-detect [f]
  (let [img (Imgcodecs/imread f)
        gray (Mat.)
        faces (MatOfRect.)]

    ;; Convert image to graylevel and equalize the histogram
    (Imgproc/cvtColor img gray Imgproc/COLOR_RGB2GRAY)
    (Imgproc/equalizeHist gray gray)

    ;; Load the classifier file from
    ;; https://github.com/nagadomi/lbpcascade_animeface
    (doto (CascadeClassifier.)
      (.load "./lbpcascade_animeface.xml")
      (.detectMultiScale gray faces))

    ;; Draw rectangle according to face size
    (doseq [face (.toList faces)]
      (Imgproc/rectangle img
                         (Point. (.x face) (.y face))
                         (Point. (+ (.x face) (.width face))
                                 (+ (.y face) (.height face)))
                         (Scalar. 144 48 255)))

    ;; Write the result
    (Imgcodecs/imwrite "example1-fdetect.png" img)
    (println "generate generate example1-fdetect.png")))

(defn -main [& args]
  (let [arg1 (nth args 0)]
    (if arg1
      (face-detect arg1)
      (println "Error: Please specify filename."))))
