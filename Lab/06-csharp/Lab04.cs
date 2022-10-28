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