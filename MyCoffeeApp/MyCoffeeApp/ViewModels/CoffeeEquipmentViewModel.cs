using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace MyCoffeeApp.ViewModels
{
    public class CoffeeEquipmentViewModel : BindableObject
    {
        public CoffeeEquipmentViewModel()
        {
            IncreaseCount = new Command(OnIncrease);
        }

        public ICommand IncreaseCount { get; }

        private int count = 0;
        private string countDisplay = "0";

        public string CountDisplay
        {
            get => countDisplay;
            set
            {
                if (value == countDisplay)
                    return;
                countDisplay = value;
                OnPropertyChanged();
            }
        }

        void OnIncrease()
        {
            count++;
            CountDisplay = count.ToString();
        }
    }
}
