using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;

namespace DynamicsCrm.DevKit2019.UnitTests.TestInfrastructure
{
    /// <summary>
    /// Builds in-memory implementations of COM interop interfaces (EnvDTE*),
    /// whose indexed properties cannot be implemented in C#. Every interface
    /// method is routed to a handler keyed by "InterfaceFullName.MemberName";
    /// getter names look like ".get_Solution", setters ".set_Solution".
    /// </summary>
    internal static class InterfaceProxy
    {
        public static object Create(Type primaryInterface, Func<string, object[], object> handler)
        {
            var interfaces = new List<Type> { primaryInterface };
            interfaces.AddRange(primaryInterface.GetInterfaces());

            var assemblyName = new AssemblyName($"DevKit2019Proxy_{Guid.NewGuid():N}");
            var assembly = AssemblyBuilder.DefineDynamicAssembly(assemblyName, AssemblyBuilderAccess.Run);
            var module = assembly.DefineDynamicModule("Proxy");
            var typeBuilder = module.DefineType(
                $"Proxy_{primaryInterface.Name}",
                TypeAttributes.Class | TypeAttributes.Public | TypeAttributes.Sealed | TypeAttributes.BeforeFieldInit);

            var handlerField = typeBuilder.DefineField(
                "handler", typeof(Func<string, object[], object>), FieldAttributes.Private | FieldAttributes.InitOnly);

            var constructor = typeBuilder.DefineConstructor(
                MethodAttributes.Public | MethodAttributes.HideBySig | MethodAttributes.SpecialName,
                CallingConventions.Standard,
                new[] { typeof(Func<string, object[], object>) });
            var ctorIl = constructor.GetILGenerator();
            ctorIl.Emit(OpCodes.Ldarg_0);
            ctorIl.Emit(OpCodes.Call, typeof(object).GetConstructor(Type.EmptyTypes));
            ctorIl.Emit(OpCodes.Ldarg_0);
            ctorIl.Emit(OpCodes.Ldarg_1);
            ctorIl.Emit(OpCodes.Stfld, handlerField);
            ctorIl.Emit(OpCodes.Ret);

            typeBuilder.AddInterfaceImplementation(primaryInterface);
            foreach (var iface in interfaces) typeBuilder.AddInterfaceImplementation(iface);

            var methods = interfaces
                .SelectMany(i => i.GetMethods())
                .Distinct()
                .ToList();

            foreach (var method in methods)
            {
                var parameters = method.GetParameters();
                var parameterTypes = parameters.Select(p => p.ParameterType).ToArray();

                MethodBuilder methodBuilder;
                methodBuilder = typeBuilder.DefineMethod(
                    method.Name,
                    MethodAttributes.Public | MethodAttributes.Virtual | MethodAttributes.HideBySig | MethodAttributes.NewSlot,
                    CallingConventions.Standard,
                    method.ReturnType,
                    parameterTypes);

                var key = $"{method.DeclaringType.FullName}.{method.Name}";
                var il = methodBuilder.GetILGenerator();

                // args = new object[parameterCount]; args[i] = argN
                il.Emit(OpCodes.Ldarg_0);
                il.Emit(OpCodes.Ldfld, handlerField);
                il.Emit(OpCodes.Ldstr, key);
                il.Emit(OpCodes.Ldc_I4, parameters.Length);
                il.Emit(OpCodes.Newarr, typeof(object));
                for (var i = 0; i < parameters.Length; i++)
                {
                    il.Emit(OpCodes.Dup);
                    il.Emit(OpCodes.Ldc_I4, i);
                    il.Emit(OpCodes.Ldarg, i + 1);
                    if (parameters[i].ParameterType.IsByRef) il.Emit(OpCodes.Ldind_Ref);
                    var parameterType = parameters[i].ParameterType.IsByRef
                        ? parameters[i].ParameterType.GetElementType()
                        : parameters[i].ParameterType;
                    if (parameterType.IsValueType) il.Emit(OpCodes.Box, parameterType);
                    il.Emit(OpCodes.Stelem_Ref);
                }
                il.Emit(OpCodes.Callvirt, typeof(Func<string, object[], object>).GetMethod("Invoke"));

                if (method.ReturnType == typeof(void))
                {
                    il.Emit(OpCodes.Pop);
                }
                else if (method.ReturnType.IsValueType)
                {
                    il.Emit(OpCodes.Unbox_Any, method.ReturnType);
                }
                else
                {
                    il.Emit(OpCodes.Castclass, method.ReturnType);
                }
                il.Emit(OpCodes.Ret);

                typeBuilder.DefineMethodOverride(methodBuilder, method);
            }

            var created = typeBuilder.CreateTypeInfo();
            return created
                .GetConstructor(BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public, null, new[] { typeof(Func<string, object[], object>) }, null)
                .Invoke(new object[] { handler });
        }

        /// <summary>Convenience overload returning a strongly-typed proxy.</summary>
        public static T Create<T>(Func<string, object[], object> handler) where T : class
        {
            return (T)Create(typeof(T), handler);
        }
    }
}
