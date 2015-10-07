#include <QApplication>
#include <QQmlApplicationEngine>
#include <QDebug>

#include <io/qpm/example/helloqpm.h>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    io::qpm::example::HelloQpm hello;
    qDebug() << hello.message();

    QQmlApplicationEngine engine;
    QPM_INIT(engine) // <-- ADD THIS LINE
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
