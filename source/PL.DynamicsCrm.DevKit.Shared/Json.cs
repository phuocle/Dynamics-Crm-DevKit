using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Text;

namespace PhuocCrm.Shared
{
    [DebuggerNonUserCode()]
    public class Json
    {
        #region ToJson
        public static string ToJson(object item)
        {
            StringBuilder stringBuilder = new StringBuilder();
            AppendValue(stringBuilder, item);
            return stringBuilder.ToString();
        }
        private static void AppendValue(StringBuilder stringBuilder, object item)
        {
            if (item == null)
            {
                stringBuilder.Append("null");
                return;
            }
            Type type = item.GetType();
            if (type == typeof(string))
            {
                stringBuilder.Append('\"');
                stringBuilder.Append(((string)item).Replace("\\", "\\\\"));
                stringBuilder.Append('\"');
            }
            else if (type == typeof(int) || type == typeof(float) || type == typeof(double))
            {
                stringBuilder.Append(item.ToString());
            }
            else if (type == typeof(bool))
            {
                stringBuilder.Append(((bool)item) ? "true" : "false");
            }
            else if (item is IList)
            {
                stringBuilder.Append('[');
                bool isFirst = true;
                IList list = item as IList;
                for (int i = 0; i < list.Count; i++)
                {
                    if (isFirst)
                        isFirst = false;
                    else
                        stringBuilder.Append(',');
                    AppendValue(stringBuilder, list[i]);
                }
                stringBuilder.Append(']');
            }
            else if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Dictionary<,>))
            {
                Type keyType = type.GetGenericArguments()[0];
                if (keyType != typeof(string))
                {
                    stringBuilder.Append("{}");
                    return;
                }
                stringBuilder.Append('{');
                IDictionary dict = item as IDictionary;
                bool isFirst = true;
                foreach (object key in dict.Keys)
                {
                    if (isFirst)
                        isFirst = false;
                    else
                        stringBuilder.Append(',');
                    stringBuilder.Append('\"');
                    stringBuilder.Append((string)key);
                    stringBuilder.Append("\":");
                    AppendValue(stringBuilder, dict[key]);
                }
                stringBuilder.Append('}');
            }
            else
            {
                stringBuilder.Append('{');
                bool isFirst = true;
                FieldInfo[] fieldInfos = type.GetFields();
                for (int i = 0; i < fieldInfos.Length; i++)
                {
                    if (fieldInfos[i].IsPublic)
                    {
                        object value = fieldInfos[i].GetValue(item);
                        if (value != null)
                        {
                            if (isFirst)
                                isFirst = false;
                            else
                                stringBuilder.Append(',');
                            stringBuilder.Append('\"');
                            stringBuilder.Append(fieldInfos[i].Name);
                            stringBuilder.Append("\":");
                            AppendValue(stringBuilder, value);
                        }
                    }
                }
                PropertyInfo[] propertyInfo = type.GetProperties();
                for (int i = 0; i < propertyInfo.Length; i++)
                {
                    if (propertyInfo[i].CanRead)
                    {
                        object value = propertyInfo[i].GetValue(item, null);
                        if (value != null)
                        {
                            if (isFirst)
                                isFirst = false;
                            else
                                stringBuilder.Append(',');
                            stringBuilder.Append('\"');
                            stringBuilder.Append(propertyInfo[i].Name);
                            stringBuilder.Append("\":");
                            AppendValue(stringBuilder, value);
                        }
                    }
                }
                stringBuilder.Append('}');
            }
        }

        #endregion

        #region ToClass

        private static Stack<List<string>> splitArrayPool = new Stack<List<string>>();
        private static StringBuilder stringBuilder = new StringBuilder();
        private static readonly Dictionary<Type, Dictionary<string, FieldInfo>> fieldInfoCache = new Dictionary<Type, Dictionary<string, FieldInfo>>();
        private static readonly Dictionary<Type, Dictionary<string, PropertyInfo>> propertyInfoCache = new Dictionary<Type, Dictionary<string, PropertyInfo>>();

        public static T ToClass<T>(string json)
        {
            stringBuilder.Length = 0;
            for (int i = 0; i < json.Length; i++)
            {
                char c = json[i];
                if (c == '\"')
                {
                    i = AppendUntilStringEnd(true, i, json);
                    continue;
                }
                if (char.IsWhiteSpace(c)) continue;
                stringBuilder.Append(c);
            }
            return (T)ParseValue(typeof(T), stringBuilder.ToString());
        }
        private static int AppendUntilStringEnd(bool appendEscapeCharacter, int startIdx, string json)
        {
            stringBuilder.Append(json[startIdx]);
            for (int i = startIdx + 1; i < json.Length; i++)
            {
                if (json[i] == '\\')
                {
                    if (appendEscapeCharacter)
                        stringBuilder.Append(json[i]);
                    stringBuilder.Append(json[i + 1]);
                    i++;
                }
                else if (json[i] == '\"')
                {
                    stringBuilder.Append(json[i]);
                    return i;
                }
                else
                    stringBuilder.Append(json[i]);
            }
            return json.Length - 1;
        }
        private static object ParseValue(Type type, string json)
        {
            if (type == typeof(string))
            {
                if (json.Length <= 2)
                    return string.Empty;
                string str = json.Substring(1, json.Length - 2);
                return str.Replace("\\\\", "\"\"").Replace("\\", string.Empty).Replace("\"\"", "\\");
            }
            if (type == typeof(int))
            {
                int result;
                int.TryParse(json, out result);
                return result;
            }
            if (type == typeof(float))
            {
                float result;
                float.TryParse(json, out result);
                return result;
            }
            if (type == typeof(double))
            {
                double result;
                double.TryParse(json, out result);
                return result;
            }
            if (type == typeof(bool))
            {
                return json.ToLower() == "true";
            }
            if (json == "null")
            {
                return null;
            }
            if (type.IsArray)
            {
                Type arrayType = type.GetElementType();
                if (json[0] != '[' || json[json.Length - 1] != ']')
                    return null;
                List<string> elems = Split(json);
                Array newArray = Array.CreateInstance(arrayType, elems.Count);
                for (int i = 0; i < elems.Count; i++)
                    newArray.SetValue(ParseValue(arrayType, elems[i]), i);
                splitArrayPool.Push(elems);
                return newArray;
            }
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(List<>))
            {
                Type listType = type.GetGenericArguments()[0];
                if (json[0] != '[' || json[json.Length - 1] != ']')
                    return null;
                List<string> elems = Split(json);
                var list = (IList)type.GetConstructor(new Type[] { typeof(int) }).Invoke(new object[] { elems.Count });
                for (int i = 0; i < elems.Count; i++)
                    list.Add(ParseValue(listType, elems[i]));
                splitArrayPool.Push(elems);
                return list;
            }
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Dictionary<,>))
            {
                Type keyType, valueType;
                {
                    Type[] args = type.GetGenericArguments();
                    keyType = args[0];
                    valueType = args[1];
                }
                if (keyType != typeof(string))
                    return null;
                if (json[0] != '{' || json[json.Length - 1] != '}')
                    return null;
                List<string> elems = Split(json);
                if (elems.Count % 2 != 0)
                    return null;
                var dictionary = (IDictionary)type.GetConstructor(new Type[] { typeof(int) }).Invoke(new object[] { elems.Count / 2 });
                for (int i = 0; i < elems.Count; i += 2)
                {
                    if (elems[i].Length <= 2)
                        continue;
                    string keyValue = elems[i].Substring(1, elems[i].Length - 2);
                    object val = ParseValue(valueType, elems[i + 1]);
                    dictionary.Add(keyValue, val);
                }
                return dictionary;
            }
            if (type == typeof(object))
            {
                return ParseAnonymousValue(json);
            }
            if (json[0] == '{' && json[json.Length - 1] == '}')
            {
                return ParseObject(type, json);
            }
            return null;
        }
        private static List<string> Split(string json)
        {
            List<string> splitArray = splitArrayPool.Count > 0 ? splitArrayPool.Pop() : new List<string>();
            splitArray.Clear();
            int parseDepth = 0;
            stringBuilder.Length = 0;
            for (int i = 1; i < json.Length - 1; i++)
            {
                switch (json[i])
                {
                    case '[':
                    case '{':
                        parseDepth++;
                        break;
                    case ']':
                    case '}':
                        parseDepth--;
                        break;
                    case '\"':
                        i = AppendUntilStringEnd(true, i, json);
                        continue;
                    case ',':
                    case ':':
                        if (parseDepth == 0)
                        {
                            splitArray.Add(stringBuilder.ToString());
                            stringBuilder.Length = 0;
                            continue;
                        }
                        break;
                }
                stringBuilder.Append(json[i]);
            }
            splitArray.Add(stringBuilder.ToString());
            return splitArray;
        }
        private static object ParseAnonymousValue(string json)
        {
            if (json.Length == 0)
                return null;
            if (json[0] == '{' && json[json.Length - 1] == '}')
            {
                List<string> elems = Split(json);
                if (elems.Count % 2 != 0)
                    return null;
                var dict = new Dictionary<string, object>(elems.Count / 2);
                for (int i = 0; i < elems.Count; i += 2)
                    dict.Add(elems[i].Substring(1, elems[i].Length - 2), ParseAnonymousValue(elems[i + 1]));
                return dict;
            }
            if (json[0] == '[' && json[json.Length - 1] == ']')
            {
                List<string> items = Split(json);
                var finalList = new List<object>(items.Count);
                for (int i = 0; i < items.Count; i++)
                    finalList.Add(ParseAnonymousValue(items[i]));
                return finalList;
            }
            if (json[0] == '\"' && json[json.Length - 1] == '\"')
            {
                string str = json.Substring(1, json.Length - 2);
                return str.Replace("\\", string.Empty);
            }
            if (char.IsDigit(json[0]) || json[0] == '-')
            {
                if (json.Contains("."))
                {
                    double result;
                    double.TryParse(json, out result);
                    return result;
                }
                else
                {
                    int result;
                    int.TryParse(json, out result);
                    return result;
                }
            }
            if (json == "true")
                return true;
            if (json == "false")
                return false;
            return null;
        }
        private static object ParseObject(Type type, string json)
        {
            var dic = (Dictionary<string, object>)ParseAnonymousValue(json);
            return ObjectFromDictionary(type, dic);
        }
        private static object ObjectFromDictionary(Type type, IDictionary<string, object> dict)
        {
            object result = (object)Activator.CreateInstance(type);
            foreach (var item in dict)
                type.GetProperty(item.Key).SetValue(result, item.Value, null);
            return result;
        }

        #endregion
    }
}