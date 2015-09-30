package jline2;

import java.io.IOException;

import jline.TerminalFactory;
import jline.console.ConsoleReader;

public class Example0 {

    public static void main(String[] args) {
        ConsoleReader console = new ConsoleReader();
        console.setPrompt("java> ");
        String line = null;
        while ((line = console.readLine()) != null) {
            console.println(line);
        }
    }
}