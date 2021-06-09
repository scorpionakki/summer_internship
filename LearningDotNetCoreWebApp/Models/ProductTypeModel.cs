using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningDotNetCoreWebApp.Models
{
    public class ProductTypeModel
    {
        public string Name { get; set; }
        public string SKUID { get; set; }
        public int Stock { get; set; }
        public double OwnPrice { get; set; }

        public Dictionary<string, double> AmazonCompetitors { get; set; } //CompetitorName, Price(Amazon)
        public Dictionary<string, double> FlipkartCompetitors { get; set; } //CompetitorName, Price(Flipkart)
    }
}
