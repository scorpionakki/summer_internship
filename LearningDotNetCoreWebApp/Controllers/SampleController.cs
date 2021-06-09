using LearningDotNetCoreWebApp.Models;
using LearningDotNetCoreWebApp.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningDotNetCoreWebApp.Controllers
{
    public class SampleController : Controller
    {
        private readonly SampleRepository _sampleRepository = null;
        public SampleController()
        {
            _sampleRepository = new SampleRepository();
        }
        public IActionResult Index()
        {
            return View();
        }

        public List<ProductTypeModel> ProductTypes()
        {
           
            return _sampleRepository.GetAllProductTypes();
        }

        public ProductTypeModel ProductType(string SKUID)
        {
            
            return _sampleRepository.GetProductTypeBySKUID(SKUID);
        }

    }
}
