export const languageOptions = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
    boilerplateCode: `console.log("Hello, world!");`,
  },
  {
    id: 45,
    name: "Assembly (NASM 2.14.02)",
    label: "Assembly (NASM 2.14.02)",
    value: "assembly",
    boilerplateCode: ``,
  },
  {
    id: 46,
    name: "Bash (5.0.0)",
    label: "Bash (5.0.0)",
    value: "bash",
    boilerplateCode: ``,
  },
  {
    id: 47,
    name: "Basic (FBC 1.07.1)",
    label: "Basic (FBC 1.07.1)",
    value: "basic",
    boilerplateCode: ``,
  },
  {
    id: 75,
    name: "C (Clang 7.0.1)",
    label: "C (Clang 7.0.1)",
    value: "c",
    boilerplateCode: `
    #include <stdio.h>

    int main() {
      printf("Hello, world!");
      return 0;
    }`,
  },
  {
    id: 76,
    name: "C++ (Clang 7.0.1)",
    label: "C++ (Clang 7.0.1)",
    value: "cpp",
    boilerplateCode: `
    #include <iostream>

    int main() {
      std::cout << "Hello, world!" << std::endl;
      return 0;
    }`,
  },
  {
    id: 48,
    name: "C (GCC 7.4.0)",
    label: "C (GCC 7.4.0)",
    value: "c",
    boilerplateCode: `
    #include <stdio.h>

    int main() {
      printf("Hello, world!");
      return 0;
    }`,
  },
  {
    id: 52,
    name: "C++ (GCC 7.4.0)",
    label: "C++ (GCC 7.4.0)",
    value: "cpp",
    boilerplateCode: `
    #include <iostream>

    int main() {
      std::cout << "Hello, world!" << std::endl;
      return 0;
    }`,
  },
  {
    id: 49,
    name: "C (GCC 8.3.0)",
    label: "C (GCC 8.3.0)",
    value: "c",
    boilerplateCode: `
    #include <stdio.h>

    int main() {
      printf("Hello, world!");
      return 0;
    }`,
  },
  {
    id: 53,
    name: "C++ (GCC 8.3.0)",
    label: "C++ (GCC 8.3.0)",
    value: "cpp",
    boilerplateCode: `
    #include <iostream>

    int main() {
      std::cout << "Hello, world!" << std::endl;
      return 0;
    }`,
  },
  {
    id: 50,
    name: "C (GCC 9.2.0)",
    label: "C (GCC 9.2.0)",
    value: "c",
    boilerplateCode: `
    #include <stdio.h>

    int main() {
      printf("Hello, world!");
      return 0;
    }`,
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
    label: "C++ (GCC 9.2.0)",
    value: "cpp",
    boilerplateCode: `
    #include <iostream>

    int main() {
      std::cout << "Hello, world!" << std::endl;
      return 0;
    }`,
  },
  {
    id: 86,
    name: "Clojure (1.10.1)",
    label: "Clojure (1.10.1)",
    value: "clojure",
    boilerplateCode: `(println "Hello, world!")`,
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
    label: "C# (Mono 6.6.0.161)",
    value: "csharp",
    boilerplatecode: `
    using System;

    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, world!");
        }
    }`,
  },
  {
    id: 77,
    name: "COBOL (GnuCOBOL 2.2)",
    label: "COBOL (GnuCOBOL 2.2)",
    value: "cobol",
    boilerplateCode: `
    IDENTIFICATION DIVISION.
    PROGRAM-ID. HelloWorld.

    PROCEDURE DIVISION.
      DISPLAY 'Hello, world!'.
      STOP RUN.`,
  },
  {
    id: 55,
    name: "Common Lisp (SBCL 2.0.0)",
    label: "Common Lisp (SBCL 2.0.0)",
    value: "lisp",
    boilerplateCode: `
    (defun hello-world ()
    (format t "Hello, world!~%"))

    (hello-world)`,
  },
  {
    id: 56,
    name: "D (DMD 2.089.1)",
    label: "D (DMD 2.089.1)",
    value: "d",
    boilerplateCode: ``,
  },
  {
    id: 57,
    name: "Elixir (1.9.4)",
    label: "Elixir (1.9.4)",
    value: "elixir",
    boilerplateCode: `
    defmodule HelloWorld do
      def hello do
        IO.puts "Hello, world!"
      end
    end

    HelloWorld.hello()`,
  },
  {
    id: 58,
    name: "Erlang (OTP 22.2)",
    label: "Erlang (OTP 22.2)",
    value: "erlang",
    boilerplateCode: ``,
  },
  {
    id: 44,
    label: "Executable",
    name: "Executable",
    value: "exe",
    boilerplateCode: ``,
  },
  {
    id: 87,
    name: "F# (.NET Core SDK 3.1.202)",
    label: "F# (.NET Core SDK 3.1.202)",
    value: "fsharp",
    boilerplateCode: `
    open System

    let helloWorld () =
        printfn "Hello, world!"
      
    helloWorld()
    `,
  },
  {
    id: 59,
    name: "Fortran (GFortran 9.2.0)",
    label: "Fortran (GFortran 9.2.0)",
    value: "fortran",
    boilerplateCode: ``,
  },
  {
    id: 60,
    name: "Go (1.13.5)",
    label: "Go (1.13.5)",
    value: "go",
    boilerplateCode: `
    package main

    import "fmt"
    
    func main() {
        fmt.Println("Hello, world!")
    }`,
  },
  {
    id: 88,
    name: "Groovy (3.0.3)",
    label: "Groovy (3.0.3)",
    value: "groovy",
    boilerplateCode: ``,
  },
  {
    id: 61,
    name: "Haskell (GHC 8.8.1)",
    label: "Haskell (GHC 8.8.1)",
    value: "haskell",
    boilerplateCode: ``,
  },
  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
    label: "Java (OpenJDK 13.0.1)",
    value: "java",
    boilerplateCode: `
    public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, world!");
      }
    }`,
  },

  {
    id: 78,
    name: "Kotlin (1.3.70)",
    label: "Kotlin (1.3.70)",
    value: "kotlin",
    boilerplateCode: `fun main() {
      println("Hello, world!")
  }`,
  },
  {
    id: 64,
    name: "Lua (5.3.5)",
    label: "Lua (5.3.5)",
    value: "lua",
    boilerplateCode: ``,
  },

  {
    id: 79,
    name: "Objective-C (Clang 7.0.1)",
    label: "Objective-C (Clang 7.0.1)",
    value: "objectivec",
    boilerplateCode: `
    #import <Foundation/Foundation.h>

    int main(int argc, const char * argv[]) {
        @autoreleasepool {
            NSLog(@"Hello, world!");
        }
        return 0;
    }`,
  },
  {
    id: 65,
    name: "OCaml (4.09.0)",
    label: "OCaml (4.09.0)",
    value: "ocaml",
    boilerplateCode: ``,
  },
  {
    id: 66,
    name: "Octave (5.1.0)",
    label: "Octave (5.1.0)",
    value: "octave",
    boilerplateCode: ``,
  },
  {
    id: 67,
    name: "Pascal (FPC 3.0.4)",
    label: "Pascal (FPC 3.0.4)",
    value: "pascal",
    boilerplateCode: ``,
  },
  {
    id: 85,
    name: "Perl (5.28.1)",
    label: "Perl (5.28.1)",
    value: "perl",
    boilerplateCode: `
    #!/usr/bin/perl

    use strict;
    use warnings;

    print "Hello, world!\n";`,
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
    label: "PHP (7.4.1)",
    value: "php",
    boilerplateCode: `
    <?php

    echo "Hello, world!\n";`,
  },
  {
    id: 43,
    label: "Plain Text",
    name: "Plain Text",
    value: "text",
    boilerplateCode: `Hello`,
  },
  {
    id: 69,
    name: "Prolog (GNU Prolog 1.4.5)",
    label: "Prolog (GNU Prolog 1.4.5)",
    value: "prolog",
    boilerplateCode: `Hello, world!`,
  },
  {
    id: 70,
    name: "Python (2.7.17)",
    label: "Python (2.7.17)",
    value: "python",
    boilerplateCode: `print "(Hello, world!)"`,
  },
  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    value: "python",
    boilerplateCode: `print("Hello, world!")`,
  },
  {
    id: 80,
    name: "R (4.0.0)",
    label: "R (4.0.0)",
    value: "r",
    boilerplateCode: `print("Hello, world!")`,
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    label: "Ruby (2.7.0)",
    value: "ruby",
    boilerplateCode: `puts "Hello, world!"`,
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
    label: "Rust (1.40.0)",
    value: "rust",
    boilerplateCode: `println!("Hello, world!");`,
  },
  {
    id: 81,
    name: "Scala (2.13.2)",
    label: "Scala (2.13.2)",
    value: "scala",
    boilerplateCode: `println("Hello, world!")`,
  },
  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
    label: "SQL (SQLite 3.27.2)",
    value: "sql",
    boilerplateCode: `SELECT * FROM table;`,
  },
  {
    id: 83,
    name: "Swift (5.2.3)",
    label: "Swift (5.2.3)",
    value: "swift",
    boilerplateCode: `print("Hello, world!")`,
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
    label: "TypeScript (3.7.4)",
    value: "typescript",
    boilerplateCode: `console.log("Hello, world!");`,
  },
  {
    id: 84,
    name: "Visual Basic.Net (vbnc 0.0.0.5943)",
    label: "Visual Basic.Net (vbnc 0.0.0.5943)",
    value: "vbnet",
    boilerplateCode: `Console.WriteLine("Hello, world!");`,
  },
];
