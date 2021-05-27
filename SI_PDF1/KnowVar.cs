using System;
using System.Collections.Generic;
using System.Text;
namespace SI_PDF1
{ 
    class KnowVar
    {
        int _m = 10;
        public void MyMethod(int i, int j = 10)
        {
            var k = i + j;
            var sum = "The sum";
            int n;
            string mul;
            n = i * j;
            mul = "The multiplication";
            KnowVar ob = new KnowVar();
            KnowVar ob2 = null;
        }
    }
}
