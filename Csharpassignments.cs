using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace ConsoleApp4
{
    internal class Class1
    {
        public static void Main(string[] args)
        {
         /* 2)   DateTime day = DateTime.Now;
               Console.WriteLine("Enter your DOB: ");
               DateTime userDateTime;
               if (DateTime.TryParse(Console.ReadLine(), out userDateTime))
               {
                   long age = day.Year - userDateTime.Year;
                   Console.WriteLine($"Age: {age}");

               }
               else
               {
                   Console.WriteLine("You have entered an incorrect value");
               }
               Console.WriteLine($"date now {DateTime.Now}");
               Console.WriteLine($"date now {DateTime.Today}");
               Console.WriteLine($"date now {DateTime.UtcNow}");

               var date1 = new DateTime();
               Console.WriteLine("Enter date");
               if (DateTime.TryParse(Console.ReadLine(), out date1))
               {
                   Console.WriteLine(date1.ToString("F", new CultureInfo("fr-IN")));
                   Console.WriteLine(date1.ToString(new CultureInfo("en-GB")));
                   Console.WriteLine(date1.ToString(new CultureInfo("en-US")));
               }
   */

        /*  4)   string str;
                 Console.WriteLine("Insert string");
                 str=Console.ReadLine();
                 Console.WriteLine("Insert the word to search");
                 string word=Console.ReadLine();
                 if(str.Contains(word))
                 {
                     Console.WriteLine("contains");
                 }
                 else
                 {
                     Console.WriteLine("Doesnt");
                 }*/


       /* 1)         DateTime date = DateTime.Now;

                      Console.WriteLine(date.ToString("yyyy-MM-dd HH:mm"));*/

       /* 5) var sb = new StringBuilder();      
                    Console.WriteLine("Enter the main string");
                    sb = new StringBuilder(Console.ReadLine());
                    Console.WriteLine("Enter the position to insert");
                    int x = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter the word to insert");
                    string y = Console.ReadLine();
                    sb.Insert(x, y);
                    Console.WriteLine(sb);*/

       /* 3)   Console.WriteLine("Enter the string");
            string s=Console.ReadLine();    
            for(int i=0;i<s.Length;i++)
            {
                Console.WriteLine(s[i]);
            }
           */

        }
    }
}
