using System;
using System.Collections.Generic;
using System.Text;

namespace SI_PDF1
{
    class Point
    {
        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }

        public Tuple<int,int> Deconstruct()
        {
            return Tuple.Create(X, Y);
        }

        private int X;
        private int Y;
    }
}
