// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

namespace _06_csharp
{
    class Lab
    {
        static void Main()
        {
            Console.WriteLine("Lab01:");
            Lab01.Lab();
            Console.WriteLine("Lab02:");
            Lab02.Lab();
            Console.WriteLine("Lab03:");
            Lab03.Lab();
            Console.WriteLine("Lab04:");
            Lab04.Lab();
            Console.WriteLine("Lab06:");
            Car car = new Car("Mercedes-Benz", "E200L", "Black", 100);
            Console.WriteLine(car.Registration);
            Console.WriteLine($"{car.Value()}");
        }
    }
}