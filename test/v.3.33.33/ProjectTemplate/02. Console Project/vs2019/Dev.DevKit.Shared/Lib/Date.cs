using System.Diagnostics;
using System.Globalization;
using System.Runtime.Serialization;

namespace System
{
    [DebuggerNonUserCode()]
    public struct Date : IComparable, IFormattable, IComparable<Date>, IEquatable<Date>
    {
        private DateTime _dt;

        public static readonly Date MaxValue = new Date(DateTime.MaxValue);
        public static readonly Date MinValue = new Date(DateTime.MinValue);

        public Date(int year, int month, int day)
        {
            this._dt = new DateTime(year, month, day);
        }

        public Date(DateTime dateTime)
        {
            this._dt = dateTime.AddTicks(-dateTime.Ticks % TimeSpan.TicksPerDay);
        }

        public static TimeSpan operator -(Date d1, Date d2)
        {
            return d1._dt - d2._dt;
        }

        public static Date operator -(Date d, TimeSpan t)
        {
            return new Date(d._dt - t);
        }

        public static bool operator !=(Date d1, Date d2)
        {
            return d1._dt != d2._dt;
        }

        public static Date operator +(Date d, TimeSpan t)
        {
            return new Date(d._dt + t);
        }

        public static bool operator <(Date d1, Date d2)
        {
            return d1._dt < d2._dt;
        }

        public static bool operator <=(Date d1, Date d2)
        {
            return d1._dt <= d2._dt;
        }

        public static bool operator ==(Date d1, Date d2)
        {
            return d1._dt == d2._dt;
        }

        public static bool operator >(Date d1, Date d2)
        {
            return d1._dt > d2._dt;
        }

        public static bool operator >=(Date d1, Date d2)
        {
            return d1._dt >= d2._dt;
        }

        public static implicit operator DateTime(Date d)
        {
            return d._dt;
        }

        public static explicit operator Date(DateTime d)
        {
            return new Date(d);
        }

        public int Day
        {
            get
            {
                return this._dt.Day;
            }
        }

        public DayOfWeek DayOfWeek
        {
            get
            {
                return this._dt.DayOfWeek;
            }
        }

        public int DayOfYear
        {
            get
            {
                return this._dt.DayOfYear;
            }
        }

        public int Month
        {
            get
            {
                return this._dt.Month;
            }
        }

        public static Date Today
        {
            get
            {
                return new Date(DateTime.Today);
            }
        }

        public int Year
        {
            get
            {
                return this._dt.Year;
            }
        }

        public Date AddDays(int value)
        {
            return new Date(this._dt.AddDays(value));
        }

        public Date AddMonths(int value)
        {
            return new Date(this._dt.AddMonths(value));
        }

        public Date AddYears(int value)
        {
            return new Date(this._dt.AddYears(value));
        }

        public static int Compare(Date d1, Date d2)
        {
            return d1.CompareTo(d2);
        }

        public int CompareTo(Date value)
        {
            return this._dt.CompareTo(value._dt);
        }

        public int CompareTo(object value)
        {
            return this._dt.CompareTo(value);
        }

        public static int DaysInMonth(int year, int month)
        {
            return DateTime.DaysInMonth(year, month);
        }

        public bool Equals(Date value)
        {
            return this._dt.Equals(value._dt);
        }

        public override bool Equals(object value)
        {
            return value is Date && this._dt.Equals(((Date)value)._dt);
        }

        public override int GetHashCode()
        {
            return this._dt.GetHashCode();
        }

        public static bool Equals(Date d1, Date d2)
        {
            return d1._dt.Equals(d2._dt);
        }

        public static bool IsLeapYear(int year)
        {
            return DateTime.IsLeapYear(year);
        }

        public static Date Parse(string s)
        {
            return new Date(DateTime.Parse(s));
        }

        public static Date Parse(string s, IFormatProvider provider)
        {
            return new Date(DateTime.Parse(s, provider));
        }

        public static Date Parse(string s, IFormatProvider provider, DateTimeStyles style)
        {
            return new Date(DateTime.Parse(s, provider, style));
        }

        public static Date ParseExact(string s, string format, IFormatProvider provider)
        {
            return new Date(DateTime.ParseExact(s, format, provider));
        }

        public static Date ParseExact(string s, string format, IFormatProvider provider, DateTimeStyles style)
        {
            return new Date(DateTime.ParseExact(s, format, provider, style));
        }

        public static Date ParseExact(string s, string[] formats, IFormatProvider provider, DateTimeStyles style)
        {
            return new Date(DateTime.ParseExact(s, formats, provider, style));
        }

        public TimeSpan Subtract(Date value)
        {
            return this - value;
        }

        public Date Subtract(TimeSpan value)
        {
            return this - value;
        }

        public string ToLongString()
        {
            return this._dt.ToLongDateString();
        }

        public string ToShortString()
        {
            return this._dt.ToShortDateString();
        }

        public override string ToString()
        {
            return this.ToShortString();
        }

        public string ToString(IFormatProvider provider)
        {
            return this._dt.ToString(provider);
        }

        public string ToString(string format)
        {
            if (format == "O" || format == "o" || format == "s")
            {
                return this.ToString("yyyy-MM-dd");
            }

            return this._dt.ToString(format);
        }

        public string ToString(string format, IFormatProvider provider)
        {
            return this._dt.ToString(format, provider);
        }

        public static bool TryParse(string s, out Date result)
        {
            DateTime d;
            bool success = DateTime.TryParse(s, out d);
            result = new Date(d);
            return success;
        }

        public static bool TryParse(string s, IFormatProvider provider, DateTimeStyles style, out Date result)
        {
            DateTime d;
            bool success = DateTime.TryParse(s, provider, style, out d);
            result = new Date(d);
            return success;
        }

        public static bool TryParseExact(string s, string format, IFormatProvider provider, DateTimeStyles style, out Date result)
        {
            DateTime d;
            bool success = DateTime.TryParseExact(s, format, provider, style, out d);
            result = new Date(d);
            return success;
        }

        public static bool TryParseExact(string s, string[] formats, IFormatProvider provider, DateTimeStyles style, out Date result)
        {
            DateTime d;
            bool success = DateTime.TryParseExact(s, formats, provider, style, out d);
            result = new Date(d);
            return success;
        }
    }

    [DebuggerNonUserCode()]
    public static class DateTimeExtensions
    {
        public static Date ToDate(this DateTime dt)
        {
            return new Date(dt);
        }

        public static DateTime ToDateTime(this Date d)
        {
            return new DateTime(d.Year, d.Month, d.Day, 0, 0, 0);
        }
    }
}