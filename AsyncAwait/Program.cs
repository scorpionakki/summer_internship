using System;
using System.IO;
using System.Threading.Tasks;

//This will read all the lines concurrently along with the main thread but before it could read properly our main thread exits hence we won't get any output to make the main thread wait we have added console.readkey()

//File.ReadAllLinesAsync("TextFile1.txt").ContinueWith(t =>
//{

//    //Task will be completed
//    var lines = t.Result;
//    foreach (var line in lines)
//    {
//        Console.WriteLine(line);
//    }
//});

//Console.ReadKey();

//Now using async await
async static Task ReadFile()
{
    var lines = await File.ReadAllLinesAsync("TextFile1.txt");
    foreach (var line in lines)
    {
        Console.WriteLine(line);
    }
};

await ReadFile();

