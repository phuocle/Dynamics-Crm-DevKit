using System;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    public static class Extensions
    {
        public static void ForEach<T>(this IEnumerable<T> ie, Action<T> action)
        {
            foreach (var i in ie)
            {
                action(i);
            }
        }

    }
}
