#include <QApplication>
#include <QQmlApplicationEngine>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QQmlApplicationEngine engine;
    QPM_INIT(engine) // <-- ADD THIS LINE
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
