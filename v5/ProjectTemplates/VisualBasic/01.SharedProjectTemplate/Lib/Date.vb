Imports System
Imports System.Diagnostics
Imports System.Globalization

Namespace System
    <DebuggerNonUserCode()>
    Public Structure [Date]
        Implements IComparable
        Implements IFormattable
        Implements IComparable(Of [Date])
        Implements IEquatable(Of [Date])

        Private _dt As DateTime

        Public Shared ReadOnly MaxValue As New [Date](DateTime.MaxValue)
        Public Shared ReadOnly MinValue As New [Date](DateTime.MinValue)

        Public Sub New(ByVal year As Integer, ByVal month As Integer, ByVal day As Integer)
            Me._dt = New DateTime(year, month, day)
        End Sub

        Public Sub New(ByVal dateTime As DateTime)
            Me._dt = dateTime.AddTicks(-dateTime.Ticks Mod TimeSpan.TicksPerDay)
        End Sub

        Public Shared Operator -(ByVal d1 As [Date], ByVal d2 As [Date]) As TimeSpan
            Return d1._dt - d2._dt
        End Operator

        Public Shared Operator -(ByVal d As [Date], ByVal t As TimeSpan) As [Date]
            Return New [Date](d._dt - t)
        End Operator

        Public Shared Operator <>(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt <> d2._dt
        End Operator

        Public Shared Operator +(ByVal d As [Date], ByVal t As TimeSpan) As [Date]
            Return New [Date](d._dt + t)
        End Operator

        Public Shared Operator <(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt < d2._dt
        End Operator

        Public Shared Operator <=(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt <= d2._dt
        End Operator

        Public Shared Operator =(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt = d2._dt
        End Operator

        Public Shared Operator >(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt > d2._dt
        End Operator

        Public Shared Operator >=(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt >= d2._dt
        End Operator

        Public Shared Widening Operator CType(ByVal d As [Date]) As DateTime
            Return d._dt
        End Operator

        Public Shared Narrowing Operator CType(ByVal d As DateTime) As [Date]
            Return New [Date](d)
        End Operator

        Public ReadOnly Property Day As Integer
            Get
                Return Me._dt.Day
            End Get
        End Property

        Public ReadOnly Property DayOfWeek As DayOfWeek
            Get
                Return Me._dt.DayOfWeek
            End Get
        End Property

        Public ReadOnly Property DayOfYear As Integer
            Get
                Return Me._dt.DayOfYear
            End Get
        End Property

        Public ReadOnly Property Month As Integer
            Get
                Return Me._dt.Month
            End Get
        End Property

        Public Shared ReadOnly Property Today As [Date]
            Get
                Return New [Date](DateTime.Today)
            End Get
        End Property

        Public ReadOnly Property Year As Integer
            Get
                Return Me._dt.Year
            End Get
        End Property

        Public Function AddDays(ByVal value As Integer) As [Date]
            Return New [Date](Me._dt.AddDays(value))
        End Function

        Public Function AddMonths(ByVal value As Integer) As [Date]
            Return New [Date](Me._dt.AddMonths(value))
        End Function

        Public Function AddYears(ByVal value As Integer) As [Date]
            Return New [Date](Me._dt.AddYears(value))
        End Function

        Public Shared Function Compare(ByVal d1 As [Date], ByVal d2 As [Date]) As Integer
            Return d1.CompareTo(d2)
        End Function

        Public Function CompareTo(ByVal value As [Date]) As Integer Implements IComparable(Of [Date]).CompareTo
            Return Me._dt.CompareTo(value._dt)
        End Function

        Public Function CompareTo(ByVal value As Object) As Integer Implements IComparable.CompareTo
            Return Me._dt.CompareTo(value)
        End Function

        Public Shared Function DaysInMonth(ByVal year As Integer, ByVal month As Integer) As Integer
            Return DateTime.DaysInMonth(year, month)
        End Function

        Public Overloads Function Equals(ByVal value As [Date]) As Boolean Implements IEquatable(Of [Date]).Equals
            Return Me._dt.Equals(value._dt)
        End Function

        Public Overrides Function Equals(ByVal value As Object) As Boolean
            If TypeOf value Is [Date] Then
                Return Me._dt.Equals(CType(value, [Date])._dt)
            End If
            Return False
        End Function

        Public Overrides Function GetHashCode() As Integer
            Return Me._dt.GetHashCode()
        End Function

        Public Shared Overloads Function Equals(ByVal d1 As [Date], ByVal d2 As [Date]) As Boolean
            Return d1._dt.Equals(d2._dt)
        End Function

        Public Shared Function IsLeapYear(ByVal year As Integer) As Boolean
            Return DateTime.IsLeapYear(year)
        End Function

        Public Shared Function Parse(ByVal s As String) As [Date]
            Return New [Date](DateTime.Parse(s))
        End Function

        Public Shared Function Parse(ByVal s As String, ByVal provider As IFormatProvider) As [Date]
            Return New [Date](DateTime.Parse(s, provider))
        End Function

        Public Shared Function Parse(ByVal s As String, ByVal provider As IFormatProvider, ByVal style As DateTimeStyles) As [Date]
            Return New [Date](DateTime.Parse(s, provider, style))
        End Function

        Public Shared Function ParseExact(ByVal s As String, ByVal format As String, ByVal provider As IFormatProvider) As [Date]
            Return New [Date](DateTime.ParseExact(s, format, provider))
        End Function

        Public Shared Function ParseExact(ByVal s As String, ByVal format As String, ByVal provider As IFormatProvider, ByVal style As DateTimeStyles) As [Date]
            Return New [Date](DateTime.ParseExact(s, format, provider, style))
        End Function

        Public Shared Function ParseExact(ByVal s As String, ByVal formats As String(), ByVal provider As IFormatProvider, ByVal style As DateTimeStyles) As [Date]
            Return New [Date](DateTime.ParseExact(s, formats, provider, style))
        End Function

        Public Function Subtract(ByVal value As [Date]) As TimeSpan
            Return Me - value
        End Function

        Public Function Subtract(ByVal value As TimeSpan) As [Date]
            Return Me - value
        End Function

        Public Function ToLongString() As String
            Return Me._dt.ToLongDateString()
        End Function

        Public Function ToShortString() As String
            Return Me._dt.ToShortDateString()
        End Function

        Public Overrides Function ToString() As String
            Return Me.ToShortString()
        End Function

        Public Overloads Function ToString(ByVal provider As IFormatProvider) As String Implements IFormattable.ToString
            Return Me._dt.ToString(provider)
        End Function

        Public Overloads Function ToString(ByVal format As String) As String
            If format = "O" OrElse format = "o" OrElse format = "s" Then
                Return Me.ToString("yyyy-MM-dd")
            End If

            Return Me._dt.ToString(format)
        End Function

        Public Overloads Function ToString(ByVal format As String, ByVal provider As IFormatProvider) As String Implements IFormattable.ToString
            Return Me._dt.ToString(format, provider)
        End Function

        Public Shared Function TryParse(ByVal s As String, ByRef result As [Date]) As Boolean
            Dim d As DateTime
            Dim success As Boolean = DateTime.TryParse(s, d)
            result = New [Date](d)
            Return success
        End Function

        Public Shared Function TryParse(ByVal s As String, ByVal provider As IFormatProvider, ByVal style As DateTimeStyles, ByRef result As [Date]) As Boolean
            Dim d As DateTime
            Dim success As Boolean = DateTime.TryParse(s, provider, style, d)
            result = New [Date](d)
            Return success
        End Function

        Public Shared Function TryParseExact(ByVal s As String, ByVal format As String, ByVal provider As IFormatProvider, ByVal style As DateTimeStyles, ByRef result As [Date]) As Boolean
            Dim d As DateTime
            Dim success As Boolean = DateTime.TryParseExact(s, format, provider, style, d)
            result = New [Date](d)
            Return success
        End Function

        Public Shared Function TryParseExact(ByVal s As String, ByVal formats As String(), ByVal provider As IFormatProvider, ByVal style As DateTimeStyles, ByRef result As [Date]) As Boolean
            Dim d As DateTime
            Dim success As Boolean = DateTime.TryParseExact(s, formats, provider, style, d)
            result = New [Date](d)
            Return success
        End Function
    End Structure

    <DebuggerNonUserCode()>
    Public Module DateTimeExtensions
        <Runtime.CompilerServices.Extension()>
        Public Function ToDate(ByVal dt As DateTime) As [Date]
            Return New [Date](dt)
        End Function

        <Runtime.CompilerServices.Extension()>
        Public Function ToDateTime(ByVal d As [Date]) As DateTime
            Return New DateTime(d.Year, d.Month, d.Day, 0, 0, 0)
        End Function
    End Module
End Namespace
