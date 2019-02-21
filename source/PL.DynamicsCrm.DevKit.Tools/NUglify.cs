using System.IO;
using NUglify;

namespace PL.DynamicsCrm.DevKit.Tools
{
    public class NUglify
    {
        internal static void Minify(string[] args)
        {
            //nuglify "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\PL.CrmGridPlus.WebResource\html\GoogleMap.html" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\Pack\Crm\html\GoogleMap.html"
            //args[0] = @function = "nuglify"
            //args[1] = normal file
            //args[2] = minify file
            var file = args[1];
            var minify = args[2];
            var extension = Path.GetExtension(file);
            switch (extension)
            {
                case ".html":
                    if (File.Exists(file))
                    {
                        var html = File.ReadAllText(file);
                        var result = Uglify.Html(html);
                        File.WriteAllText(minify, result.Code);
                    }
                    break;
                case ".css":
                    if (File.Exists(file))
                    {
                        var css = File.ReadAllText(file);
                        var result = Uglify.Css(css);
                        File.WriteAllText(minify, result.Code);
                    }
                    break;
                case ".js":
                    if (File.Exists(file))
                    {
                        var js = File.ReadAllText(file);
                        var result = Uglify.Js(js);
                        File.WriteAllText(minify, result.Code);
                    }
                    break;
            }
        }
    }
}
