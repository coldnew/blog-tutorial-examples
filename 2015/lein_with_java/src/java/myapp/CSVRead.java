package myapp;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;


public class CSVRead {

    public static void main(String[] args) {
        try {
            CSVParser parser = new CSVParser(new FileReader(args[0]),
                                             CSVFormat.DEFAULT.withHeader());
            for (CSVRecord record : parser) {
                System.out.printf("%s\t%s\n",
                                  record.get("COL1"),
                                  record.get("COL2"));
            }
            parser.close();
        }
        catch(IOException e) {
            e.printStackTrace();
        }
    }
}
