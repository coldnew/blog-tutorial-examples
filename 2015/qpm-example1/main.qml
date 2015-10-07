import QtQuick 2.4
import QtQuick.Controls 1.3
import QtQuick.Window 2.2

import io.qpm.example 1.0

ApplicationWindow {
    title: qsTr("Hello Qpm")
    width: 200
    height: 100
    visible: true

    HelloQpm {
        anchors.fill: parent
    }

}
