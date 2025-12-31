Imports $SharedNameSpace$
Imports Microsoft.Xrm.Sdk.Messages
Imports Microsoft.Xrm.Sdk.Query
Imports System
Imports System.Collections.Generic
Imports System.Diagnostics
Imports System.IO
Imports System.IO.Compression
Imports System.Linq
Imports System.Reflection
Imports System.Runtime.Serialization
Imports System.Runtime.Serialization.Json
Imports System.Text
Imports System.Xml

Namespace Microsoft.Xrm.Sdk
    <DebuggerNonUserCode()>
    Public Module Extension
        <System.Runtime.CompilerServices.Extension()>
        Public Function ToUpdateRequest(ByVal entity As Entity) As OrganizationRequest
            Return New UpdateRequest With {
                .Target = entity
            }
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToUpdateRequest(ByVal entity As Entity, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = entity.ToUpdateRequest()
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToUpdateRequest(ByVal entity As EntityBase) As OrganizationRequest
            Return entity.GetUpdateEntity().ToUpdateRequest()
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToUpdateRequest(ByVal entity As EntityBase, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = entity.GetUpdateEntity().ToUpdateRequest()
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToCreateRequest(ByVal entity As Entity) As OrganizationRequest
            Return New CreateRequest With {
                .Target = entity
            }
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToCreateRequest(ByVal entity As Entity, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = entity.ToCreateRequest()
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToCreateRequest(ByVal entity As EntityBase) As OrganizationRequest
            Return entity.GetCreateEntity().ToCreateRequest()
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToCreateRequest(ByVal entity As EntityBase, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = entity.GetCreateEntity().ToCreateRequest()
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToDeleteRequest(ByVal entity As Entity) As OrganizationRequest
            Return entity.ToEntityReference().ToDeleteRequest()
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToDeleteRequest(ByVal entityReference As EntityReference) As OrganizationRequest
            Return New DeleteRequest With {
                .Target = entityReference
            }
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToDeleteRequest(ByVal entity As EntityBase) As OrganizationRequest
            Return entity.ToEntityReference().ToDeleteRequest()
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToDeleteRequest(ByVal entity As Entity, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = entity.ToEntityReference().ToDeleteRequest()
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToDeleteRequest(ByVal entityReference As EntityReference, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = New DeleteRequest With {
                .Target = entityReference
            }
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToDeleteRequest(ByVal entity As EntityBase, ByVal Optional tag As String = Nothing) As OrganizationRequest
            Dim request = entity.ToEntityReference().ToDeleteRequest()
            If tag IsNot Nothing Then request("tag") = tag
            Return request
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function Create(ByVal service As IOrganizationService, ByVal entity As EntityBase) As Guid
            Return service.Create(entity.GetCreateEntity())
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Sub Update(ByVal service As IOrganizationService, ByVal entity As EntityBase)
            service.Update(entity.GetUpdateEntity())
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Sub Delete(ByVal service As IOrganizationService, ByVal entity As EntityBase)
            service.Delete(entity.LogicalName, entity.Id)
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Sub Delete(ByVal service As IOrganizationService, ByVal entityReference As EntityReference)
            service.Delete(If(entityReference Is Nothing, Nothing, entityReference.LogicalName), entityReference.Id)
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Function Retrieve(Of T)(ByVal service As IOrganizationService, ByVal entityName As String, ByVal id As Guid, ByVal columns As ColumnSet) As T
            Try
                Dim entity = service.Retrieve(entityName, id, columns)
                Dim args As Object() = New Object() {entity}
                Return DirectCast(Activator.CreateInstance(GetType(T), args), T)
            Catch
                Return Nothing
            End Try
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function RetrieveMultiple(Of T As EntityBase)(ByVal service As IOrganizationService, ByVal fetchXml As String) As List(Of T)
            Dim lists = New List(Of T)()
            Dim pagingCookie As String = Nothing
            Dim pageNumber = 1
            Dim fetchCount = 5000
            While True
                fetchXml = CreateXml(fetchXml, pagingCookie, pageNumber, fetchCount)
                Dim rows = service.RetrieveMultiple(New FetchExpression(fetchXml))
                For Each entity In rows.Entities
                    Dim args As Object() = New Object() {entity}
                    lists.Add(DirectCast(Activator.CreateInstance(GetType(T), args), T))
                Next
                If rows.MoreRecords Then
                    pageNumber += 1
                    pagingCookie = rows.PagingCookie
                Else
                    Exit While
                End If
            End While
            Return lists
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function RetrieveMultiple(ByVal service As IOrganizationService, ByVal fetchXml As String) As EntityCollection
            Dim entityCollection = New EntityCollection()
            Dim pagingCookie As String = Nothing
            Dim pageNumber = 1
            Dim fetchCount = 5000
            While True
                fetchXml = CreateXml(fetchXml, pagingCookie, pageNumber, fetchCount)
                Dim rows = service.RetrieveMultiple(New FetchExpression(fetchXml))
                entityCollection.Entities.AddRange(rows.Entities)
                If rows.MoreRecords Then
                    pageNumber += 1
                    pagingCookie = rows.PagingCookie
                Else
                    Exit While
                End If
            End While
            Return entityCollection
        End Function

        Private Function CreateXml(ByVal xml As String, ByVal cookie As String, ByVal page As Integer, ByVal count As Integer) As String
            Dim stringReader As New StringReader(xml)
            Dim reader As New XmlTextReader(stringReader)
            Dim doc As New XmlDocument()
            doc.Load(reader)
            Return CreateXml(doc, cookie, page, count)
        End Function

        Private Function CreateXml(ByVal doc As XmlDocument, ByVal cookie As String, ByVal page As Integer, ByVal count As Integer) As String
            Dim attrs As XmlAttributeCollection = doc.DocumentElement.Attributes
            If cookie IsNot Nothing Then
                Dim pagingAttr As XmlAttribute = doc.CreateAttribute("paging-cookie")
                pagingAttr.Value = cookie
                attrs.Append(pagingAttr)
            End If
            Dim pageAttr As XmlAttribute = doc.CreateAttribute("page")
            pageAttr.Value = System.Convert.ToString(page)
            attrs.Append(pageAttr)
            Dim countAttr As XmlAttribute = doc.CreateAttribute("count")
            countAttr.Value = System.Convert.ToString(count)
            attrs.Append(countAttr)
            Dim sb As New StringBuilder(1024)
            Dim stringWriter As New StringWriter(sb)
            Dim writer As New XmlTextWriter(stringWriter)
            doc.WriteTo(writer)
            writer.Close()
            Return sb.ToString()
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Sub LogMessage(ByVal tracingService As ITracingService, ByVal message As String)
#If DEBUG Then
            If tracingService IsNot Nothing Then tracingService.Trace(message)
#End If
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Sub DebugContext(ByVal tracingService As ITracingService, ByVal context As IExecutionContext)
#If DEBUG Then
            Dim json = context.ToRemoteExecutionContext().SerializeRemoteExecutionContext()
            If json.Length > 10000 Then
                json = $"var json = Helper.Decompress(""{json.Compress()}"");"
                If json.Length > 10000 Then json = "json more than 10,000 chars"
            Else
                If json.Contains("'") Then
                    json = $"var json = @""{json.Replace("""", """""")}"";"
                Else
                    json = json.Replace("""", "'")
                    json = $"var json = @""{json}"".Replace(""'"", ""\"""");"
                End If
            End If
            tracingService.LogMessage(json)
#End If
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Sub DebugMessage(ByVal tracingService As ITracingService, ByVal message As String)
#If DEBUG Then
            tracingService.LogMessage(message)
#End If
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Sub DebugMethod(ByVal tracingService As ITracingService)
#If DEBUG Then
            Dim stackTrace = New System.Diagnostics.StackTrace()
            Dim method = stackTrace.GetFrame(1).GetMethod()
            Dim debug = $"{method?.ReflectedType?.Namespace}.{method?.ReflectedType?.Name}.{method?.Name}"
            If tracingService IsNot Nothing Then tracingService.DebugMessage(debug)
#End If
        End Sub

        <System.Runtime.CompilerServices.Extension()>
        Public Function ToRemoteExecutionContext(ByVal context As IExecutionContext) As RemoteExecutionContext
            Dim destination = New RemoteExecutionContext()
            Dim destFields = destination.GetType().GetFields(BindingFlags.NonPublic Or BindingFlags.Instance).ToArray()
            For Each sourceProperty In context.GetType().GetProperties(BindingFlags.Public Or BindingFlags.Instance)
                For Each destField In destFields
                    If sourceProperty.Name = "PreEntityImages" AndAlso destField.Name = "_preImages" Then
                        destField.SetValue(destination, sourceProperty.GetValue(context, New Object() {}))
                        Exit For
                    End If
                    If sourceProperty.Name = "PostEntityImages" AndAlso destField.Name = "_postImages" Then
                        destField.SetValue(destination, sourceProperty.GetValue(context, New Object() {}))
                        Exit For
                    End If
                    If Not destField.Name.ToLower().Contains(sourceProperty.Name.ToLower()) OrElse Not destField.FieldType.IsAssignableFrom(sourceProperty.PropertyType) Then Continue For
                    destField.SetValue(destination, sourceProperty.GetValue(context, New Object() {}))
                    Exit For
                Next
            Next
            Return destination
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function SerializeRemoteExecutionContext(ByVal context As RemoteExecutionContext) As String
            Dim settings = New DataContractJsonSerializerSettings() With {
                .DateTimeFormat = New DateTimeFormat("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'")
            }
            Dim serializer = New DataContractJsonSerializer(GetType(RemoteExecutionContext), settings)
            Using ms As New MemoryStream()
                Using sr As New StreamReader(ms)
                    serializer.WriteObject(ms, context)
                    ms.Position = 0
                    Return sr.ReadToEnd()
                End Using
            End Using
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function Decompress(ByVal compressedString As String) As String
            Dim decompressedBytes As Byte()
            Dim compressedStream = New MemoryStream(Convert.FromBase64String(compressedString))
            Using decompressorStream = New DeflateStream(compressedStream, CompressionMode.Decompress)
                Using decompressedStream = New MemoryStream()
                    decompressorStream.CopyTo(decompressedStream)
                    decompressedBytes = decompressedStream.ToArray()
                End Using
            End Using
            Return Encoding.UTF8.GetString(decompressedBytes)
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function Compress(ByVal uncompressedString As String) As String
            Dim compressedBytes As Byte()
            Using uncompressedStream = New MemoryStream(Encoding.UTF8.GetBytes(uncompressedString))
                Using compressedStream = New MemoryStream()
                    Using compressorStream = New DeflateStream(compressedStream, CompressionLevel.Fastest, True)
                        uncompressedStream.CopyTo(compressorStream)
                    End Using
                    compressedBytes = compressedStream.ToArray()
                End Using
            End Using
            Return Convert.ToBase64String(compressedBytes)
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function GetImage(ByVal collection As EntityImageCollection, ByVal imageName As String) As Entity
            If (If(collection IsNot Nothing, collection.Count, 0)) = 0 Then Return Nothing
            Return collection(imageName)
        End Function
    End Module
End Namespace
