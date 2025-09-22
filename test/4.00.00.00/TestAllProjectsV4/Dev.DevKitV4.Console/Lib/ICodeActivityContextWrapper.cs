using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace Dev.DevKitV4.Console.Lib
{
    public interface ICodeActivityContextWrapper
    {
        T GetExtension<T>() where T : class;
    }

    public class CodeActivityContextWrapper : ICodeActivityContextWrapper
    {
        private readonly System.Activities.CodeActivityContext _context;

        public CodeActivityContextWrapper(System.Activities.CodeActivityContext context)
        {
            _context = context;
        }

        public T GetExtension<T>() where T : class
        {
            return _context.GetExtension<T>();
        }
    }
}