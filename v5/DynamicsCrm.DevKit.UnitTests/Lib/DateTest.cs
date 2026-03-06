using System;
using System.Globalization;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    public class DateTest
    {
        #region Constructors

        [Fact]
        public void Constructor_YearMonthDay_SetsCorrectValues()
        {
            var date = new Date(2025, 3, 15);

            Assert.Equal(2025, date.Year);
            Assert.Equal(3, date.Month);
            Assert.Equal(15, date.Day);
        }

        [Fact]
        public void Constructor_DateTime_StripsTimeComponent()
        {
            var dateTime = new DateTime(2025, 6, 20, 14, 30, 45, 123);
            var date = new Date(dateTime);

            Assert.Equal(2025, date.Year);
            Assert.Equal(6, date.Month);
            Assert.Equal(20, date.Day);
            DateTime converted = date;
            Assert.Equal(0, converted.Hour);
            Assert.Equal(0, converted.Minute);
            Assert.Equal(0, converted.Second);
            Assert.Equal(0, converted.Millisecond);
        }

        [Fact]
        public void Constructor_DateTime_MidnightRemainsUnchanged()
        {
            var dateTime = new DateTime(2025, 1, 1, 0, 0, 0);
            var date = new Date(dateTime);

            Assert.Equal(new DateTime(2025, 1, 1), (DateTime)date);
        }

        #endregion

        #region Static Fields

        [Fact]
        public void MaxValue_EqualsDateTimeMaxValueDate()
        {
            DateTime maxDt = Date.MaxValue;
            Assert.Equal(DateTime.MaxValue.Date, maxDt);
        }

        [Fact]
        public void MinValue_EqualsDateTimeMinValueDate()
        {
            DateTime minDt = Date.MinValue;
            Assert.Equal(DateTime.MinValue.Date, minDt);
        }

        [Fact]
        public void DefaultDate_EqualsMinValue()
        {
            var defaultDate = default(Date);
            Assert.Equal(Date.MinValue, defaultDate);
        }

        #endregion

        #region Operators - Arithmetic

        [Fact]
        public void Operator_SubtractDates_ReturnsTimeSpan()
        {
            var d1 = new Date(2025, 3, 20);
            var d2 = new Date(2025, 3, 15);

            TimeSpan result = d1 - d2;

            Assert.Equal(TimeSpan.FromDays(5), result);
        }

        [Fact]
        public void Operator_SubtractTimeSpan_ReturnsNewDate()
        {
            var date = new Date(2025, 3, 20);
            var span = TimeSpan.FromDays(5);

            Date result = date - span;

            Assert.Equal(new Date(2025, 3, 15), result);
        }

        [Fact]
        public void Operator_AddTimeSpan_ReturnsNewDate()
        {
            var date = new Date(2025, 3, 15);
            var span = TimeSpan.FromDays(10);

            Date result = date + span;

            Assert.Equal(new Date(2025, 3, 25), result);
        }

        #endregion

        #region Operators - Comparison

        [Fact]
        public void Operator_Equal_TrueForSameDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.True(d1 == d2);
        }

        [Fact]
        public void Operator_Equal_FalseForDifferentDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.False(d1 == d2);
        }

        [Fact]
        public void Operator_NotEqual_TrueForDifferentDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.True(d1 != d2);
        }

        [Fact]
        public void Operator_NotEqual_FalseForSameDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.False(d1 != d2);
        }

        [Fact]
        public void Operator_LessThan_TrueWhenEarlier()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.True(d1 < d2);
        }

        [Fact]
        public void Operator_LessThan_FalseWhenLaterOrEqual()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.False(d1 < d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.False(d3 < d4);
        }

        [Fact]
        public void Operator_LessThanOrEqual_TrueWhenEarlierOrEqual()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.True(d1 <= d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.True(d3 <= d4);
        }

        [Fact]
        public void Operator_LessThanOrEqual_FalseWhenLater()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.False(d1 <= d2);
        }

        [Fact]
        public void Operator_GreaterThan_TrueWhenLater()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.True(d1 > d2);
        }

        [Fact]
        public void Operator_GreaterThan_FalseWhenEarlierOrEqual()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.False(d1 > d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.False(d3 > d4);
        }

        [Fact]
        public void Operator_GreaterThanOrEqual_TrueWhenLaterOrEqual()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.True(d1 >= d2);

            var d3 = new Date(2025, 6, 15);
            var d4 = new Date(2025, 6, 15);
            Assert.True(d3 >= d4);
        }

        [Fact]
        public void Operator_GreaterThanOrEqual_FalseWhenEarlier()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.False(d1 >= d2);
        }

        #endregion

        #region Operators - Conversion

        [Fact]
        public void ImplicitConversion_DateToDateTime()
        {
            var date = new Date(2025, 7, 4);
            DateTime dt = date;
            Assert.Equal(new DateTime(2025, 7, 4), dt);
        }

        [Fact]
        public void ExplicitConversion_DateTimeToDate()
        {
            var dateTime = new DateTime(2025, 7, 4, 15, 30, 0);
            Date date = (Date)dateTime;
            Assert.Equal(2025, date.Year);
            Assert.Equal(7, date.Month);
            Assert.Equal(4, date.Day);
        }

        #endregion

        #region Properties

        [Fact]
        public void Day_ReturnsCorrectDay()
        {
            var date = new Date(2025, 8, 23);
            Assert.Equal(23, date.Day);
        }

        [Fact]
        public void DayOfWeek_ReturnsCorrectDayOfWeek()
        {
            var date = new Date(2025, 3, 1);
            Assert.Equal(System.DayOfWeek.Saturday, date.DayOfWeek);
        }

        [Fact]
        public void DayOfYear_ReturnsCorrectDayOfYear()
        {
            var date = new Date(2025, 2, 1);
            Assert.Equal(32, date.DayOfYear);
        }

        [Fact]
        public void Month_ReturnsCorrectMonth()
        {
            var date = new Date(2025, 11, 1);
            Assert.Equal(11, date.Month);
        }

        [Fact]
        public void Year_ReturnsCorrectYear()
        {
            var date = new Date(2025, 1, 1);
            Assert.Equal(2025, date.Year);
        }

        [Fact]
        public void Today_ReturnsCurrentDate()
        {
            var today = Date.Today;
            var expected = DateTime.Today;
            Assert.Equal(expected.Year, today.Year);
            Assert.Equal(expected.Month, today.Month);
            Assert.Equal(expected.Day, today.Day);
        }

        #endregion

        #region Add Methods

        [Fact]
        public void AddDays_ReturnsCorrectDate()
        {
            var date = new Date(2025, 1, 28);
            var result = date.AddDays(5);
            Assert.Equal(new Date(2025, 2, 2), result);
        }

        [Fact]
        public void AddDays_NegativeValue_SubtractsDays()
        {
            var date = new Date(2025, 3, 1);
            var result = date.AddDays(-1);
            Assert.Equal(new Date(2025, 2, 28), result);
        }

        [Fact]
        public void AddMonths_ReturnsCorrectDate()
        {
            var date = new Date(2025, 1, 31);
            var result = date.AddMonths(1);
            Assert.Equal(new Date(2025, 2, 28), result);
        }

        [Fact]
        public void AddYears_ReturnsCorrectDate()
        {
            var date = new Date(2024, 2, 29);
            var result = date.AddYears(1);
            Assert.Equal(new Date(2025, 2, 28), result);
        }

        #endregion

        #region Compare / CompareTo

        [Fact]
        public void Compare_ReturnsNegativeWhenFirstIsEarlier()
        {
            var d1 = new Date(2025, 1, 1);
            var d2 = new Date(2025, 12, 31);
            Assert.True(Date.Compare(d1, d2) < 0);
        }

        [Fact]
        public void Compare_ReturnsZeroWhenEqual()
        {
            var d1 = new Date(2025, 6, 15);
            var d2 = new Date(2025, 6, 15);
            Assert.Equal(0, Date.Compare(d1, d2));
        }

        [Fact]
        public void Compare_ReturnsPositiveWhenFirstIsLater()
        {
            var d1 = new Date(2025, 12, 31);
            var d2 = new Date(2025, 1, 1);
            Assert.True(Date.Compare(d1, d2) > 0);
        }

        [Fact]
        public void CompareTo_Date_ReturnsCorrectOrder()
        {
            var d1 = new Date(2025, 3, 1);
            var d2 = new Date(2025, 3, 2);
            Assert.True(d1.CompareTo(d2) < 0);
            Assert.Equal(0, d1.CompareTo(d1));
            Assert.True(d2.CompareTo(d1) > 0);
        }

        [Fact]
        public void CompareTo_Object_WithNull_ReturnsPositive()
        {
            var date = new Date(2025, 1, 1);
            Assert.True(date.CompareTo((object)null) > 0);
        }

        [Fact]
        public void CompareTo_Object_WithDate_ReturnsCorrectOrder()
        {
            var d1 = new Date(2025, 1, 1);
            object d2 = new Date(2025, 6, 15);
            Assert.True(d1.CompareTo(d2) < 0);
        }

        [Fact]
        public void CompareTo_Object_WithInvalidType_ThrowsArgumentException()
        {
            var date = new Date(2025, 1, 1);
            Assert.Throws<ArgumentException>(() => date.CompareTo("not a date"));
        }

        [Fact]
        public void CompareTo_Object_WithBoxedDate_ReturnsZero()
        {
            var d1 = new Date(2025, 5, 10);
            object d2 = new Date(2025, 5, 10);
            Assert.Equal(0, d1.CompareTo(d2));
        }

        #endregion

        #region DaysInMonth / IsLeapYear

        [Fact]
        public void DaysInMonth_ReturnsCorrectDays()
        {
            Assert.Equal(31, Date.DaysInMonth(2025, 1));
            Assert.Equal(28, Date.DaysInMonth(2025, 2));
            Assert.Equal(29, Date.DaysInMonth(2024, 2));
            Assert.Equal(30, Date.DaysInMonth(2025, 4));
        }

        [Fact]
        public void IsLeapYear_ReturnsCorrectResult()
        {
            Assert.True(Date.IsLeapYear(2024));
            Assert.False(Date.IsLeapYear(2025));
            Assert.True(Date.IsLeapYear(2000));
            Assert.False(Date.IsLeapYear(1900));
        }

        #endregion

        #region Equals / GetHashCode

        [Fact]
        public void Equals_Date_TrueForSameDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.True(d1.Equals(d2));
        }

        [Fact]
        public void Equals_Date_FalseForDifferentDate()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.False(d1.Equals(d2));
        }

        [Fact]
        public void Equals_Object_TrueForBoxedDate()
        {
            var d1 = new Date(2025, 5, 10);
            object d2 = new Date(2025, 5, 10);
            Assert.True(d1.Equals(d2));
        }

        [Fact]
        public void Equals_Object_FalseForDifferentBoxedDate()
        {
            var d1 = new Date(2025, 5, 10);
            object d2 = new Date(2025, 5, 11);
            Assert.False(d1.Equals(d2));
        }

        [Fact]
        public void Equals_Object_FalseForNull()
        {
            var date = new Date(2025, 5, 10);
            Assert.False(date.Equals((object)null));
        }

        [Fact]
        public void Equals_Object_FalseForNonDateType()
        {
            var date = new Date(2025, 5, 10);
            Assert.False(date.Equals("2025-05-10"));
            Assert.False(date.Equals(42));
        }

        [Fact]
        public void Equals_Static_TrueForSameDates()
        {
            var d1 = new Date(2025, 9, 1);
            var d2 = new Date(2025, 9, 1);
            Assert.True(Date.Equals(d1, d2));
        }

        [Fact]
        public void Equals_Static_FalseForDifferentDates()
        {
            var d1 = new Date(2025, 9, 1);
            var d2 = new Date(2025, 9, 2);
            Assert.False(Date.Equals(d1, d2));
        }

        [Fact]
        public void GetHashCode_SameForEqualDates()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 10);
            Assert.Equal(d1.GetHashCode(), d2.GetHashCode());
        }

        [Fact]
        public void GetHashCode_DifferentForDifferentDates()
        {
            var d1 = new Date(2025, 5, 10);
            var d2 = new Date(2025, 5, 11);
            Assert.NotEqual(d1.GetHashCode(), d2.GetHashCode());
        }

        #endregion

        #region Subtract

        [Fact]
        public void Subtract_Date_ReturnsTimeSpan()
        {
            var d1 = new Date(2025, 3, 20);
            var d2 = new Date(2025, 3, 10);
            Assert.Equal(TimeSpan.FromDays(10), d1.Subtract(d2));
        }

        [Fact]
        public void Subtract_TimeSpan_ReturnsDate()
        {
            var date = new Date(2025, 3, 20);
            var result = date.Subtract(TimeSpan.FromDays(5));
            Assert.Equal(new Date(2025, 3, 15), result);
        }

        #endregion

        #region ToString

        [Fact]
        public void ToLongString_ReturnsLongDateFormat()
        {
            var date = new Date(2025, 3, 15);
            var expected = new DateTime(2025, 3, 15).ToLongDateString();
            Assert.Equal(expected, date.ToLongString());
        }

        [Fact]
        public void ToShortString_ReturnsShortDateFormat()
        {
            var date = new Date(2025, 3, 15);
            var expected = new DateTime(2025, 3, 15).ToShortDateString();
            Assert.Equal(expected, date.ToShortString());
        }

        [Fact]
        public void ToString_Default_ReturnsShortString()
        {
            var date = new Date(2025, 3, 15);
            Assert.Equal(date.ToShortString(), date.ToString());
        }

        [Fact]
        public void ToString_WithFormatProvider()
        {
            var date = new Date(2025, 3, 15);
            var provider = CultureInfo.InvariantCulture;
            var expected = new DateTime(2025, 3, 15).ToString(provider);
            Assert.Equal(expected, date.ToString(provider));
        }

        [Fact]
        public void ToString_FormatO_ReturnsIsoDate()
        {
            var date = new Date(2025, 3, 15);
            Assert.Equal("2025-03-15", date.ToString("O"));
        }

        [Fact]
        public void ToString_FormatLowerO_ReturnsIsoDate()
        {
            var date = new Date(2025, 3, 15);
            Assert.Equal("2025-03-15", date.ToString("o"));
        }

        [Fact]
        public void ToString_FormatS_ReturnsIsoDate()
        {
            var date = new Date(2025, 3, 15);
            Assert.Equal("2025-03-15", date.ToString("s"));
        }

        [Fact]
        public void ToString_CustomFormat_ReturnsFormattedString()
        {
            var date = new Date(2025, 3, 15);
            Assert.Equal("15/03/2025", date.ToString("dd/MM/yyyy"));
        }

        [Fact]
        public void ToString_FormatAndProvider_ReturnsFormattedString()
        {
            var date = new Date(2025, 3, 15);
            var result = date.ToString("MMMM dd, yyyy", CultureInfo.InvariantCulture);
            Assert.Equal("March 15, 2025", result);
        }

        #endregion

        #region Parse

        [Fact]
        public void Parse_String_ReturnsCorrectDate()
        {
            var date = Date.Parse("2025-03-15");
            Assert.Equal(new Date(2025, 3, 15), date);
        }

        [Fact]
        public void Parse_WithProvider_ReturnsCorrectDate()
        {
            var date = Date.Parse("03/15/2025", CultureInfo.InvariantCulture);
            Assert.Equal(new Date(2025, 3, 15), date);
        }

        [Fact]
        public void Parse_WithProviderAndStyle_ReturnsCorrectDate()
        {
            var date = Date.Parse("  2025-03-15  ", CultureInfo.InvariantCulture, DateTimeStyles.AllowWhiteSpaces);
            Assert.Equal(new Date(2025, 3, 15), date);
        }

        #endregion

        #region ParseExact

        [Fact]
        public void ParseExact_SingleFormat_ReturnsCorrectDate()
        {
            var date = Date.ParseExact("15-03-2025", "dd-MM-yyyy", CultureInfo.InvariantCulture);
            Assert.Equal(new Date(2025, 3, 15), date);
        }

        [Fact]
        public void ParseExact_SingleFormatWithStyle_ReturnsCorrectDate()
        {
            var date = Date.ParseExact("15-03-2025", "dd-MM-yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None);
            Assert.Equal(new Date(2025, 3, 15), date);
        }

        [Fact]
        public void ParseExact_MultipleFormats_ReturnsCorrectDate()
        {
            var formats = new[] { "yyyy-MM-dd", "dd/MM/yyyy", "MM-dd-yyyy" };
            var date = Date.ParseExact("15/03/2025", formats, CultureInfo.InvariantCulture, DateTimeStyles.None);
            Assert.Equal(new Date(2025, 3, 15), date);
        }

        #endregion

        #region TryParse

        [Fact]
        public void TryParse_ValidString_ReturnsTrueAndCorrectDate()
        {
            bool success = Date.TryParse("2025-03-15", out Date result);
            Assert.True(success);
            Assert.Equal(new Date(2025, 3, 15), result);
        }

        [Fact]
        public void TryParse_InvalidString_ReturnsFalse()
        {
            bool success = Date.TryParse("not-a-date", out Date result);
            Assert.False(success);
        }

        [Fact]
        public void TryParse_WithProviderAndStyle_ValidString_ReturnsTrueAndCorrectDate()
        {
            bool success = Date.TryParse("03/15/2025", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.True(success);
            Assert.Equal(new Date(2025, 3, 15), result);
        }

        [Fact]
        public void TryParse_WithProviderAndStyle_InvalidString_ReturnsFalse()
        {
            bool success = Date.TryParse("invalid", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.False(success);
        }

        #endregion

        #region TryParseExact

        [Fact]
        public void TryParseExact_SingleFormat_ValidString_ReturnsTrueAndCorrectDate()
        {
            bool success = Date.TryParseExact("15-03-2025", "dd-MM-yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.True(success);
            Assert.Equal(new Date(2025, 3, 15), result);
        }

        [Fact]
        public void TryParseExact_SingleFormat_InvalidString_ReturnsFalse()
        {
            bool success = Date.TryParseExact("2025/03/15", "dd-MM-yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.False(success);
        }

        [Fact]
        public void TryParseExact_MultipleFormats_ValidString_ReturnsTrueAndCorrectDate()
        {
            var formats = new[] { "yyyy-MM-dd", "dd/MM/yyyy" };
            bool success = Date.TryParseExact("15/03/2025", formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.True(success);
            Assert.Equal(new Date(2025, 3, 15), result);
        }

        [Fact]
        public void TryParseExact_MultipleFormats_InvalidString_ReturnsFalse()
        {
            var formats = new[] { "yyyy-MM-dd", "dd/MM/yyyy" };
            bool success = Date.TryParseExact("not-valid", formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out Date result);
            Assert.False(success);
        }

        #endregion

        #region FromDateTime / FromDayNumber / DayNumber

        [Fact]
        public void FromDateTime_StripsTimeComponent()
        {
            var dateTime = new DateTime(2025, 7, 4, 18, 30, 45);
            Date date = Date.FromDateTime(dateTime);
            Assert.Equal(2025, date.Year);
            Assert.Equal(7, date.Month);
            Assert.Equal(4, date.Day);
            Assert.Equal(new DateTime(2025, 7, 4), (DateTime)date);
        }

        [Fact]
        public void DayNumber_ReturnsCorrectValue()
        {
            var minDate = Date.MinValue;
            Assert.Equal(0, minDate.DayNumber);

            var date = new Date(2, 1, 1);
            Assert.Equal(365, date.DayNumber);
        }

        [Fact]
        public void DayNumber_RoundTripsWithFromDayNumber()
        {
            var original = new Date(2025, 3, 15);
            int dayNumber = original.DayNumber;
            var reconstructed = Date.FromDayNumber(dayNumber);
            Assert.Equal(original, reconstructed);
        }

        [Fact]
        public void FromDayNumber_Zero_ReturnsMinValue()
        {
            var date = Date.FromDayNumber(0);
            Assert.Equal(Date.MinValue, date);
        }

        [Fact]
        public void FromDayNumber_KnownValue()
        {
            var expected = new Date(2025, 1, 1);
            var date = Date.FromDayNumber(expected.DayNumber);
            Assert.Equal(expected, date);
        }

        #endregion

        #region Deconstruct

        [Fact]
        public void Deconstruct_ReturnsCorrectComponents()
        {
            var date = new Date(2025, 8, 23);
            var (year, month, day) = date;
            Assert.Equal(2025, year);
            Assert.Equal(8, month);
            Assert.Equal(23, day);
        }

        [Fact]
        public void Deconstruct_MinValue()
        {
            var (year, month, day) = Date.MinValue;
            Assert.Equal(1, year);
            Assert.Equal(1, month);
            Assert.Equal(1, day);
        }

        #endregion

        #region ToDateTime Overloads

        [Fact]
        public void ToDateTime_WithTime_ReturnsCorrectDateTime()
        {
            var date = new Date(2025, 3, 15);
            DateTime result = date.ToDateTime(10, 30, 45);
            Assert.Equal(new DateTime(2025, 3, 15, 10, 30, 45), result);
        }

        [Fact]
        public void ToDateTime_WithMidnight_MatchesImplicitConversion()
        {
            var date = new Date(2025, 3, 15);
            DateTime fromMethod = date.ToDateTime(0, 0, 0);
            DateTime fromImplicit = date;
            Assert.Equal(fromImplicit, fromMethod);
        }

        [Fact]
        public void ToDateTime_WithTimeAndKind_ReturnsCorrectDateTimeAndKind()
        {
            var date = new Date(2025, 3, 15);
            DateTime result = date.ToDateTime(14, 0, 0, DateTimeKind.Utc);
            Assert.Equal(new DateTime(2025, 3, 15, 14, 0, 0, DateTimeKind.Utc), result);
            Assert.Equal(DateTimeKind.Utc, result.Kind);
        }

        [Fact]
        public void ToDateTime_WithLocalKind_ReturnsLocalKind()
        {
            var date = new Date(2025, 6, 20);
            DateTime result = date.ToDateTime(8, 15, 30, DateTimeKind.Local);
            Assert.Equal(DateTimeKind.Local, result.Kind);
            Assert.Equal(2025, result.Year);
            Assert.Equal(6, result.Month);
            Assert.Equal(20, result.Day);
            Assert.Equal(8, result.Hour);
            Assert.Equal(15, result.Minute);
            Assert.Equal(30, result.Second);
        }

        #endregion

        #region Extension Methods

        [Fact]
        public void ToDate_Extension_StripsTime()
        {
            var dateTime = new DateTime(2025, 8, 20, 16, 45, 30);
            Date date = dateTime.ToDate();
            Assert.Equal(2025, date.Year);
            Assert.Equal(8, date.Month);
            Assert.Equal(20, date.Day);
        }

        [Fact]
        public void ToDateTime_Extension_ReturnsMidnight()
        {
            var date = new Date(2025, 8, 20);
            DateTime dateTime = date.ToDateTime();
            Assert.Equal(new DateTime(2025, 8, 20, 0, 0, 0), dateTime);
        }

        #endregion
    }
}
