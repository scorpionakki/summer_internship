using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace SI_PDF1
{
    class Q5
    {
        static void Main(string[] args)
        {
            ArrayList mixedDataTypes = new ArrayList();
            mixedDataTypes.Add(10);
            mixedDataTypes.Add(false);
            mixedDataTypes.Add(new DateTime(2019,01,01));
            mixedDataTypes.Add("sample string");

            foreach (var item in mixedDataTypes)
            {
                Console.WriteLine(item);
            }
        }
    }
}
