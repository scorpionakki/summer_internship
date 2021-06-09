using LearningDotNetCoreWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningDotNetCoreWebApp.Repository
{
    public class SampleRepository
    {
        public List<ProductTypeModel> GetAllProductTypes()
        {
            return FeedingData();
        }

        public ProductTypeModel GetProductTypeBySKUID(string SkuID)
        {
            return FeedingData().Where(x => x.SKUID == SkuID).FirstOrDefault();
        }

        private List<ProductTypeModel> FeedingData()
        {
            return new List<ProductTypeModel>()
            {
                //Product1
                new ProductTypeModel(){Name = "Product1", SKUID="SKUID1", Stock=20, OwnPrice=100.50, AmazonCompetitors = new Dictionary<string, double>(){
                    {"AmazonComp1",99.50 },
                    {"AmazonComp2", 101.50 }
                }, FlipkartCompetitors = new Dictionary<string, double>(){
                    {"FlipkartComp1", 98.50 },
                    {"FlipkartComp2", 102.50 }
                } 
                },


                //Product2
                new ProductTypeModel(){Name = "Product2", SKUID="SKUID2", Stock=25, OwnPrice=150.50, AmazonCompetitors = new Dictionary<string, double>(){
                    {"AmazonComp1",149.50 },
                    {"AmazonComp2", 151.50 }
                }, FlipkartCompetitors = new Dictionary<string, double>(){
                    {"FlipkartComp1", 148.50 },
                    {"FlipkartComp2", 152.50 }
                }
                },

                //Product3
                new ProductTypeModel(){Name = "Product3", SKUID="SKUID3", Stock=30, OwnPrice=200.50, AmazonCompetitors = new Dictionary<string, double>(){
                    {"AmazonComp1",199.50 },
                    {"AmazonComp2", 201.50 }
                }, FlipkartCompetitors = new Dictionary<string, double>(){
                    {"FlipkartComp1", 198.50 },
                    {"FlipkartComp2", 202.50 }
                }
                }
            };
        }


    }
}
