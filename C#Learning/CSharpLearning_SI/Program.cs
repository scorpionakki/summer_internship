using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning_SI
{
    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }

    }
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int x;
            int y;

            x = 7;
            y = x + 3;
            Console.WriteLine(y);
            Console.ReadLine(); */
            //---------------------------------------
            //Console.WriteLine("What is your name?");
            //Console.Write("Type your first name: ");
            //string myFirstName;

            //myFirstName = Console.ReadLine();

            //Console.Write("Type your last name: ");
            //string myLastName = Console.ReadLine();

            //Console.WriteLine(myFirstName + " " + myLastName);
            //Console.ReadLine();


            //-----------------------------------------
            //Console.WriteLine("1, 2 or 3: ");
            //string userValue = Console.ReadLine();

            //string message = (userValue == "1") ? "boat" : "strand";


            //Console.WriteLine("You entered {0} and you won {1}",userValue,message);
            //Console.ReadLine();

            //-----------------------------------------
            //int[] numbers = new int[5];
            //numbers[0] = 1;
            //numbers[1] = 3;
            ////....
            //Console.WriteLine(numbers.Length);
            //int[] numbers2 = new int[2] { 3, 5 };

            //-----------------------------------------
            //StringBuilder myString = new StringBuilder();
            //for (int i = 0; i < 100; i++)
            //{
            //    myString.Append("--");
            //    myString.Append(i);
            //}
            //Console.WriteLine(myString);
            //Console.ReadLine();

            //------------------------------------------
            //DateTime myValue = DateTime.Now;
            //Console.WriteLine(myValue.ToString());
            //Console.WriteLine(myValue.ToShortDateString());
            //Console.WriteLine(myValue.ToShortTimeString());
            //Console.WriteLine(myValue.ToLongDateString());
            //Console.WriteLine(myValue.ToLongTimeString());

            //DateTime myBday = new DateTime(1997, 8, 24);
            //Console.WriteLine(myBday.ToShortDateString());
            //DateTime myBdayNew = DateTime.Parse("8/24/1997");
            //TimeSpan myAge = DateTime.Now.Subtract(myBdayNew);
            //Console.WriteLine(myAge.TotalDays);

            //-------------------------------------------
            //Car myCar = new Car();
            //myCar.Make = "Oldsmobile";
            //myCar.Model = "Cutlas Supreme";
            //myCar.Year = 1986;
            //myCar.Color = "Black";

            //Car myOtherCar = new Car();
            //myOtherCar = myCar; //Both myOtherCar and myCar will point to the same memory location hence if one is changed it would reflect for the other one as well

            //myOtherCar.Color = "Changed";

            ////C denotes Currency and the value was provided static just for the sake of knowledge
            //Console.WriteLine("{0} {1} {2} {3} {4:C}", myCar.Make, myCar.Model, myCar.Year, myCar.Color, 100.0M);

            //------------------------------------------
            //LINQ Query
            List<Car> myCars = new List<Car>()
            {
                new Car(){ Color="Red", Make="Oldstv", Model="Cutlas NonSupreme", Year=1984},
                new Car(){ Color="White", Make="Oldsearphones", Model="Cutlas NonSupreme", Year=1985},
                new Car(){ Color="Blue", Make="Oldsmouse", Model="NonCutlas NonSupreme", Year=1986},
                new Car(){ Color="Purple", Make="Oldslaptop", Model="ProCutlas Supreme", Year=1986}
            };

            //2 ways
            //1st way - LINQ Query
            //var - automatic data type
            var cars1986 = from car in myCars where car.Year == 1986 && car.Color == "Blue" select car;
            foreach (Car car in cars1986)
            {
                Console.WriteLine("LINQ QUERY : "+car.Model);
            }
            var orderedCars = from car in myCars orderby car.Year descending select car;
            foreach (Car car in orderedCars)
            {
                Console.WriteLine("LINQ QUERY (OrderBy) : " + car.Year);
            }
            //2nd way - LINQ Method
            var cars1986Method = myCars.Where(p => p.Year == 1986 && p.Color == "Purple");
            foreach (Car carMethod in cars1986Method)
            {
                Console.WriteLine("LINQ METHOD : "+carMethod.Model);
            }

            var orderedCarsMethod = myCars.OrderByDescending(p => p.Year);
            foreach (Car car in orderedCarsMethod)
            {   
                Console.WriteLine("LINQ METHOD (OrderBy) : " + car.Year);
            }

            Console.WriteLine("All Cars.year if > 1984 : " + myCars.TrueForAll(p => p.Year > 1984));
            Console.WriteLine("All Cars.year if > 1983 : "+myCars.TrueForAll(p => p.Year > 1983));

            myCars.ForEach(p => Console.WriteLine(p.Model));

            Console.WriteLine("If any car.year > 1999 : " + myCars.Exists(p => p.Year > 1999));

            Console.WriteLine("Sum of years : " + myCars.Sum(p => p.Year));

            Console.ReadLine();
        }
    }
}
