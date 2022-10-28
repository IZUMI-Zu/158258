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