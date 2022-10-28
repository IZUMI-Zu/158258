# The Code of Lecture 6

## Lab01

```c#
namespace _06_csharp;

public class Lab01
{
    public static void Lab()
    {
        for (int i = 0; i < 11; i++)
        {
            Console.Write($"{i} ");    
        }
        Console.WriteLine();
    }
}
```

## Lab 02

```c#
namespace _06_csharp;

public class Lab02
{
    public static void Lab()
    {
        int i = 0;
        while (i < 11)
        {
            Console.Write($"{i} ");
            i++;
        }
        Console.WriteLine();
    }
}
```

## Lab 03

```C#
namespace _06_csharp;

public class Lab03
{
    public static void Lab()
    {
        int i = 0;
        do
        {
            Console.Write($"{i} ");
            i++;
        } while (i < 11);
        Console.WriteLine();
    }
}
```

## Lab 04

```c#
namespace _06_csharp;

public class Lab04
{
    public static void Lab()
    {
        for (int i = 0; i <= 100; i++)
        {
            if (i % 3 == 0 && i % 4 == 0)
            {
                Console.Write($"{i} ");
            }
        }
        Console.WriteLine();
    }
}
```

## Lab 05

```c#
namespace _06_csharp;

public class Lab05
{
    public static void Lab()
    {
        // Problem the Result is not init.
        int Result = -1;
        do
        {
            Result += 1;
        } while (Result>= 0);

    }
}
```

## Lab 06

```c#
namespace _06_csharp;

public class Car
{
    private string _make;
    private string _model;
    private string _color;
    private int _registration;

    public string Make
    {
        set => _make = value;
        get => _make;
    }

    public int Registration
    {
        get => _registration;
    }

    public string Color
    {
        set => _color = value;
        get => _color;
    }

    public string Model
    {
        set => _model = value;
        get => _model;
    }

    public Car(string make, string model, string color, int registration)
    {
        this._color = color;
        this._make = make;
        this._registration = registration;
        this._model = model;
    }

    public string Value()
    {
        string val = "Car's info:\n" + $"Make: {this._make}\nColor: {this._color}\n" +
                     $"Registration Number: {this._registration}\n"
                     + $"Model: {this._model}";
        return val;
    }

    public void SetVal(string model, string color, int registration)
    {
        if (string.IsNullOrEmpty(this._make))
        {
            this._color = color;
            this._model = model;
            this._registration = registration;
        }
    }
}
```

## Lab 07

```c#
// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

namespace _06_csharp;

public class Lab07
{
    public static void Calc()
    {
        while (true)
        {
            Start:
            double a, b;
            char c;
            try
            {
                switch (double.TryParse(Console.ReadLine(), out a))
                {
                    case false: throw new Exception();
                    case true: break;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Please enter a number!");
                goto Start;
            }

            try
            {
                switch (char.TryParse(Console.ReadLine(), out c))
                {
                    case false: throw new Exception();
                    case true: break;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Please enter a number!");
                goto Start;
            }

            try
            {
                switch (double.TryParse(Console.ReadLine(), out b))
                {
                    case false: throw new Exception();
                    case true: break;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Please enter a number!");
                goto Start;
            }

            switch (c)
            {
                case '+':
                {
                    Console.WriteLine(a.ToString() + " + " + b.ToString() + " = " +
                                      (a + b));
                    break;
                }
                case '-':
                {
                    Console.WriteLine(a.ToString() + " - " + b.ToString() + " = " +
                                      (a - b));
                    break;
                }
                case '*':
                {
                    Console.WriteLine(a.ToString() + " * " + b.ToString() + " = " +
                                      a * b);
                    break;
                }
                case '\\':
                {
                    Console.WriteLine(a.ToString() + " / " + b.ToString() + " = " +
                                      (Math.Round((a / b), 2)).ToString());
                    break;
                }
            }
        }
    }
}
```
