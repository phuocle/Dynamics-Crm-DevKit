﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets
{
	public enum ExistingComponentType
	{
		/// <summary>
		/// AI Configuration = 402
		/// </summary>
		AI_Configuration = 402,
		/// <summary>
		/// AI Project = 401
		/// </summary>
		AI_Project = 401,
		/// <summary>
		/// AI Project Type = 400
		/// </summary>
		AI_Project_Type = 400,
		/// <summary>
		/// Attachment = 35
		/// </summary>
		Attachment = 35,
		/// <summary>
		/// Attribute = 2
		/// </summary>
		Attribute = 2,
		/// <summary>
		/// Attribute Image Configuration = 431
		/// </summary>
		Attribute_Image_Configuration = 431,
		/// <summary>
		/// Attribute Lookup Value = 5
		/// </summary>
		Attribute_Lookup_Value = 5,
		/// <summary>
		/// Attribute Map = 47
		/// </summary>
		Attribute_Map = 47,
		/// <summary>
		/// Attribute Picklist Value = 4
		/// </summary>
		Attribute_Picklist_Value = 4,
		/// <summary>
		/// Canvas App = 300
		/// </summary>
		Canvas_App = 300,
		/// <summary>
		/// Complex Control = 64
		/// </summary>
		Complex_Control = 64,
		/// <summary>
		/// Connection Role = 63
		/// </summary>
		Connection_Role = 63,
		/// <summary>
		/// Connector = 371
		/// </summary>
		Connector_371 = 371,
		/// <summary>
		/// Connector = 372
		/// </summary>
		Connector_372 = 372,
		/// <summary>
		/// Contract Template = 37
		/// </summary>
		Contract_Template = 37,
		/// <summary>
		/// Convert Rule = 154
		/// </summary>
		Convert_Rule = 154,
		/// <summary>
		/// Convert Rule Item = 155
		/// </summary>
		Convert_Rule_Item = 155,
		/// <summary>
		/// Custom Control = 66
		/// </summary>
		Custom_Control = 66,
		/// <summary>
		/// Custom Control Default Config = 68
		/// </summary>
		Custom_Control_Default_Config = 68,
		/// <summary>
		/// Data Source Mapping = 166
		/// </summary>
		Data_Source_Mapping = 166,
		/// <summary>
		/// Display String = 22
		/// </summary>
		Display_String = 22,
		/// <summary>
		/// Display String Map = 23
		/// </summary>
		Display_String_Map = 23,
		/// <summary>
		/// Duplicate Rule = 44
		/// </summary>
		Duplicate_Rule = 44,
		/// <summary>
		/// Duplicate Rule Condition = 45
		/// </summary>
		Duplicate_Rule_Condition = 45,
		/// <summary>
		/// Email Template = 36
		/// </summary>
		Email_Template = 36,
		/// <summary>
		/// Entity = 1
		/// </summary>
		Entity = 1,
		/// <summary>
		/// Entity Analytics Configuration = 430
		/// </summary>
		Entity_Analytics_Configuration = 430,
		/// <summary>
		/// Entity Image Configuration = 432
		/// </summary>
		Entity_Image_Configuration = 432,
		/// <summary>
		/// Entity Key = 14
		/// </summary>
		Entity_Key = 14,
		/// <summary>
		/// Entity Map = 46
		/// </summary>
		Entity_Map = 46,
		/// <summary>
		/// Entity Relationship = 10
		/// </summary>
		Entity_Relationship = 10,
		/// <summary>
		/// Entity Relationship Relationships = 12
		/// </summary>
		Entity_Relationship_Relationships = 12,
		/// <summary>
		/// Entity Relationship Role = 11
		/// </summary>
		Entity_Relationship_Role = 11,
		/// <summary>
		/// Environment Variable Definition = 380
		/// </summary>
		Environment_Variable_Definition = 380,
		/// <summary>
		/// Environment Variable Value = 381
		/// </summary>
		Environment_Variable_Value = 381,
		/// <summary>
		/// Field Permission = 71
		/// </summary>
		Field_Permission = 71,
		/// <summary>
		/// Field Security Profile = 70
		/// </summary>
		Field_Security_Profile = 70,
		/// <summary>
		/// Form = 24
		/// </summary>
		Form = 24,
		/// <summary>
		/// Hierarchy Rule = 65
		/// </summary>
		Hierarchy_Rule = 65,
		/// <summary>
		/// Import Map = 208
		/// </summary>
		Import_Map = 208,
		/// <summary>
		/// Index = 18
		/// </summary>
		Index = 18,
		/// <summary>
		/// KB Article Template = 38
		/// </summary>
		KB_Article_Template = 38,
		/// <summary>
		/// Localized Label = 7
		/// </summary>
		Localized_Label = 7,
		/// <summary>
		/// Mail Merge Template = 39
		/// </summary>
		Mail_Merge_Template = 39,
		/// <summary>
		/// Managed Property = 13
		/// </summary>
		Managed_Property = 13,
		/// <summary>
		/// Mobile Offline Profile = 161
		/// </summary>
		Mobile_Offline_Profile = 161,
		/// <summary>
		/// Mobile Offline Profile Item = 162
		/// </summary>
		Mobile_Offline_Profile_Item = 162,
		/// <summary>
		/// Option Set = 9
		/// </summary>
		Option_Set = 9,
		/// <summary>
		/// Organization = 25
		/// </summary>
		Organization = 25,
		/// <summary>
		/// Plugin Assembly = 91
		/// </summary>
		Plugin_Assembly = 91,
		/// <summary>
		/// Plugin Type = 90
		/// </summary>
		Plugin_Type = 90,
		/// <summary>
		/// Privilege = 16
		/// </summary>
		Privilege = 16,
		/// <summary>
		/// PrivilegeObjectTypeCode = 17
		/// </summary>
		PrivilegeObjectTypeCode = 17,
		/// <summary>
		/// Relationship = 3
		/// </summary>
		Relationship = 3,
		/// <summary>
		/// Relationship Extra Condition = 8
		/// </summary>
		Relationship_Extra_Condition = 8,
		/// <summary>
		/// Report = 31
		/// </summary>
		Report = 31,
		/// <summary>
		/// Report Category = 33
		/// </summary>
		Report_Category = 33,
		/// <summary>
		/// Report Entity = 32
		/// </summary>
		Report_Entity = 32,
		/// <summary>
		/// Report Visibility = 34
		/// </summary>
		Report_Visibility = 34,
		/// <summary>
		/// Ribbon Command = 48
		/// </summary>
		Ribbon_Command = 48,
		/// <summary>
		/// Ribbon Context Group = 49
		/// </summary>
		Ribbon_Context_Group = 49,
		/// <summary>
		/// Ribbon Customization = 50
		/// </summary>
		Ribbon_Customization = 50,
		/// <summary>
		/// Ribbon Diff = 55
		/// </summary>
		Ribbon_Diff = 55,
		/// <summary>
		/// Ribbon Rule = 52
		/// </summary>
		Ribbon_Rule = 52,
		/// <summary>
		/// Ribbon Tab To Command Map = 53
		/// </summary>
		Ribbon_Tab_To_Command_Map = 53,
		/// <summary>
		/// Role = 20
		/// </summary>
		Role = 20,
		/// <summary>
		/// Role Privilege = 21
		/// </summary>
		Role_Privilege = 21,
		/// <summary>
		/// Routing Rule = 150
		/// </summary>
		Routing_Rule = 150,
		/// <summary>
		/// Routing Rule Item = 151
		/// </summary>
		Routing_Rule_Item = 151,
		/// <summary>
		/// Saved Query = 26
		/// </summary>
		Saved_Query = 26,
		/// <summary>
		/// Saved Query Visualization = 59
		/// </summary>
		Saved_Query_Visualization = 59,
		/// <summary>
		/// SDK Message Processing Step = 92
		/// </summary>
		SDK_Message_Processing_Step = 92,
		/// <summary>
		/// SDK Message Processing Step Image = 93
		/// </summary>
		SDK_Message_Processing_Step_Image = 93,
		/// <summary>
		/// SDKMessage = 201
		/// </summary>
		SDKMessage = 201,
		/// <summary>
		/// SDKMessageFilter = 202
		/// </summary>
		SDKMessageFilter = 202,
		/// <summary>
		/// SdkMessagePair = 203
		/// </summary>
		SdkMessagePair = 203,
		/// <summary>
		/// SdkMessageRequest = 204
		/// </summary>
		SdkMessageRequest = 204,
		/// <summary>
		/// SdkMessageRequestField = 205
		/// </summary>
		SdkMessageRequestField = 205,
		/// <summary>
		/// SdkMessageResponse = 206
		/// </summary>
		SdkMessageResponse = 206,
		/// <summary>
		/// SdkMessageResponseField = 207
		/// </summary>
		SdkMessageResponseField = 207,
		/// <summary>
		/// Service Endpoint = 95
		/// </summary>
		Service_Endpoint = 95,
		/// <summary>
		/// Similarity Rule = 165
		/// </summary>
		Similarity_Rule = 165,
		/// <summary>
		/// Site Map = 62
		/// </summary>
		Site_Map = 62,
		/// <summary>
		/// SLA = 152
		/// </summary>
		SLA = 152,
		/// <summary>
		/// SLA Item = 153
		/// </summary>
		SLA_Item = 153,
		/// <summary>
		/// System Form = 60
		/// </summary>
		System_Form = 60,
		/// <summary>
		/// View Attribute = 6
		/// </summary>
		View_Attribute = 6,
		/// <summary>
		/// Web Resource = 61
		/// </summary>
		Web_Resource = 61,
		/// <summary>
		/// WebWizard = 210
		/// </summary>
		WebWizard = 210,
		/// <summary>
		/// Workflow = 29
		/// </summary>
		Workflow = 29
	}

	public enum ExistingDependencyType
	{
		/// <summary>
		/// None = 0
		/// </summary>
		None = 0,
		/// <summary>
		/// Published = 2
		/// </summary>
		Published = 2,
		/// <summary>
		/// Solution Internal = 1
		/// </summary>
		Solution_Internal = 1,
		/// <summary>
		/// Unpublished = 4
		/// </summary>
		Unpublished = 4
	}

	public enum MissingComponentType
	{
		/// <summary>
		/// AI Configuration = 402
		/// </summary>
		AI_Configuration = 402,
		/// <summary>
		/// AI Project = 401
		/// </summary>
		AI_Project = 401,
		/// <summary>
		/// AI Project Type = 400
		/// </summary>
		AI_Project_Type = 400,
		/// <summary>
		/// Attachment = 35
		/// </summary>
		Attachment = 35,
		/// <summary>
		/// Attribute = 2
		/// </summary>
		Attribute = 2,
		/// <summary>
		/// Attribute Image Configuration = 431
		/// </summary>
		Attribute_Image_Configuration = 431,
		/// <summary>
		/// Attribute Lookup Value = 5
		/// </summary>
		Attribute_Lookup_Value = 5,
		/// <summary>
		/// Attribute Map = 47
		/// </summary>
		Attribute_Map = 47,
		/// <summary>
		/// Attribute Picklist Value = 4
		/// </summary>
		Attribute_Picklist_Value = 4,
		/// <summary>
		/// Canvas App = 300
		/// </summary>
		Canvas_App = 300,
		/// <summary>
		/// Complex Control = 64
		/// </summary>
		Complex_Control = 64,
		/// <summary>
		/// Connection Role = 63
		/// </summary>
		Connection_Role = 63,
		/// <summary>
		/// Connector = 371
		/// </summary>
		Connector_371 = 371,
		/// <summary>
		/// Connector = 372
		/// </summary>
		Connector_372 = 372,
		/// <summary>
		/// Contract Template = 37
		/// </summary>
		Contract_Template = 37,
		/// <summary>
		/// Convert Rule = 154
		/// </summary>
		Convert_Rule = 154,
		/// <summary>
		/// Convert Rule Item = 155
		/// </summary>
		Convert_Rule_Item = 155,
		/// <summary>
		/// Custom Control = 66
		/// </summary>
		Custom_Control = 66,
		/// <summary>
		/// Custom Control Default Config = 68
		/// </summary>
		Custom_Control_Default_Config = 68,
		/// <summary>
		/// Data Source Mapping = 166
		/// </summary>
		Data_Source_Mapping = 166,
		/// <summary>
		/// Display String = 22
		/// </summary>
		Display_String = 22,
		/// <summary>
		/// Display String Map = 23
		/// </summary>
		Display_String_Map = 23,
		/// <summary>
		/// Duplicate Rule = 44
		/// </summary>
		Duplicate_Rule = 44,
		/// <summary>
		/// Duplicate Rule Condition = 45
		/// </summary>
		Duplicate_Rule_Condition = 45,
		/// <summary>
		/// Email Template = 36
		/// </summary>
		Email_Template = 36,
		/// <summary>
		/// Entity = 1
		/// </summary>
		Entity = 1,
		/// <summary>
		/// Entity Analytics Configuration = 430
		/// </summary>
		Entity_Analytics_Configuration = 430,
		/// <summary>
		/// Entity Image Configuration = 432
		/// </summary>
		Entity_Image_Configuration = 432,
		/// <summary>
		/// Entity Key = 14
		/// </summary>
		Entity_Key = 14,
		/// <summary>
		/// Entity Map = 46
		/// </summary>
		Entity_Map = 46,
		/// <summary>
		/// Entity Relationship = 10
		/// </summary>
		Entity_Relationship = 10,
		/// <summary>
		/// Entity Relationship Relationships = 12
		/// </summary>
		Entity_Relationship_Relationships = 12,
		/// <summary>
		/// Entity Relationship Role = 11
		/// </summary>
		Entity_Relationship_Role = 11,
		/// <summary>
		/// Environment Variable Definition = 380
		/// </summary>
		Environment_Variable_Definition = 380,
		/// <summary>
		/// Environment Variable Value = 381
		/// </summary>
		Environment_Variable_Value = 381,
		/// <summary>
		/// Field Permission = 71
		/// </summary>
		Field_Permission = 71,
		/// <summary>
		/// Field Security Profile = 70
		/// </summary>
		Field_Security_Profile = 70,
		/// <summary>
		/// Form = 24
		/// </summary>
		Form = 24,
		/// <summary>
		/// Hierarchy Rule = 65
		/// </summary>
		Hierarchy_Rule = 65,
		/// <summary>
		/// Import Map = 208
		/// </summary>
		Import_Map = 208,
		/// <summary>
		/// Index = 18
		/// </summary>
		Index = 18,
		/// <summary>
		/// KB Article Template = 38
		/// </summary>
		KB_Article_Template = 38,
		/// <summary>
		/// Localized Label = 7
		/// </summary>
		Localized_Label = 7,
		/// <summary>
		/// Mail Merge Template = 39
		/// </summary>
		Mail_Merge_Template = 39,
		/// <summary>
		/// Managed Property = 13
		/// </summary>
		Managed_Property = 13,
		/// <summary>
		/// Mobile Offline Profile = 161
		/// </summary>
		Mobile_Offline_Profile = 161,
		/// <summary>
		/// Mobile Offline Profile Item = 162
		/// </summary>
		Mobile_Offline_Profile_Item = 162,
		/// <summary>
		/// Option Set = 9
		/// </summary>
		Option_Set = 9,
		/// <summary>
		/// Organization = 25
		/// </summary>
		Organization = 25,
		/// <summary>
		/// Plugin Assembly = 91
		/// </summary>
		Plugin_Assembly = 91,
		/// <summary>
		/// Plugin Type = 90
		/// </summary>
		Plugin_Type = 90,
		/// <summary>
		/// Privilege = 16
		/// </summary>
		Privilege = 16,
		/// <summary>
		/// PrivilegeObjectTypeCode = 17
		/// </summary>
		PrivilegeObjectTypeCode = 17,
		/// <summary>
		/// Relationship = 3
		/// </summary>
		Relationship = 3,
		/// <summary>
		/// Relationship Extra Condition = 8
		/// </summary>
		Relationship_Extra_Condition = 8,
		/// <summary>
		/// Report = 31
		/// </summary>
		Report = 31,
		/// <summary>
		/// Report Category = 33
		/// </summary>
		Report_Category = 33,
		/// <summary>
		/// Report Entity = 32
		/// </summary>
		Report_Entity = 32,
		/// <summary>
		/// Report Visibility = 34
		/// </summary>
		Report_Visibility = 34,
		/// <summary>
		/// Ribbon Command = 48
		/// </summary>
		Ribbon_Command = 48,
		/// <summary>
		/// Ribbon Context Group = 49
		/// </summary>
		Ribbon_Context_Group = 49,
		/// <summary>
		/// Ribbon Customization = 50
		/// </summary>
		Ribbon_Customization = 50,
		/// <summary>
		/// Ribbon Diff = 55
		/// </summary>
		Ribbon_Diff = 55,
		/// <summary>
		/// Ribbon Rule = 52
		/// </summary>
		Ribbon_Rule = 52,
		/// <summary>
		/// Ribbon Tab To Command Map = 53
		/// </summary>
		Ribbon_Tab_To_Command_Map = 53,
		/// <summary>
		/// Role = 20
		/// </summary>
		Role = 20,
		/// <summary>
		/// Role Privilege = 21
		/// </summary>
		Role_Privilege = 21,
		/// <summary>
		/// Routing Rule = 150
		/// </summary>
		Routing_Rule = 150,
		/// <summary>
		/// Routing Rule Item = 151
		/// </summary>
		Routing_Rule_Item = 151,
		/// <summary>
		/// Saved Query = 26
		/// </summary>
		Saved_Query = 26,
		/// <summary>
		/// Saved Query Visualization = 59
		/// </summary>
		Saved_Query_Visualization = 59,
		/// <summary>
		/// SDK Message Processing Step = 92
		/// </summary>
		SDK_Message_Processing_Step = 92,
		/// <summary>
		/// SDK Message Processing Step Image = 93
		/// </summary>
		SDK_Message_Processing_Step_Image = 93,
		/// <summary>
		/// SDKMessage = 201
		/// </summary>
		SDKMessage = 201,
		/// <summary>
		/// SDKMessageFilter = 202
		/// </summary>
		SDKMessageFilter = 202,
		/// <summary>
		/// SdkMessagePair = 203
		/// </summary>
		SdkMessagePair = 203,
		/// <summary>
		/// SdkMessageRequest = 204
		/// </summary>
		SdkMessageRequest = 204,
		/// <summary>
		/// SdkMessageRequestField = 205
		/// </summary>
		SdkMessageRequestField = 205,
		/// <summary>
		/// SdkMessageResponse = 206
		/// </summary>
		SdkMessageResponse = 206,
		/// <summary>
		/// SdkMessageResponseField = 207
		/// </summary>
		SdkMessageResponseField = 207,
		/// <summary>
		/// Service Endpoint = 95
		/// </summary>
		Service_Endpoint = 95,
		/// <summary>
		/// Similarity Rule = 165
		/// </summary>
		Similarity_Rule = 165,
		/// <summary>
		/// Site Map = 62
		/// </summary>
		Site_Map = 62,
		/// <summary>
		/// SLA = 152
		/// </summary>
		SLA = 152,
		/// <summary>
		/// SLA Item = 153
		/// </summary>
		SLA_Item = 153,
		/// <summary>
		/// System Form = 60
		/// </summary>
		System_Form = 60,
		/// <summary>
		/// View Attribute = 6
		/// </summary>
		View_Attribute = 6,
		/// <summary>
		/// Web Resource = 61
		/// </summary>
		Web_Resource = 61,
		/// <summary>
		/// WebWizard = 210
		/// </summary>
		WebWizard = 210,
		/// <summary>
		/// Workflow = 29
		/// </summary>
		Workflow = 29
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class InvalidDependency : EntityBase
	{
		public struct Fields
		{
			public const string ExistingComponentId = "existingcomponentid";
			public const string ExistingComponentType = "existingcomponenttype";
			public const string ExistingDependencyType = "existingdependencytype";
			public const string InvalidDependencyId = "invaliddependencyid";
			public const string IsExistingNodeRequiredComponent = "isexistingnoderequiredcomponent";
			public const string MissingComponentId = "missingcomponentid";
			public const string MissingComponentInfo = "missingcomponentinfo";
			public const string MissingComponentLookupType = "missingcomponentlookuptype";
			public const string MissingComponentType = "missingcomponenttype";
		}

		public const string EntityLogicalName = "invaliddependency";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 7107;

		[DebuggerNonUserCode()]
		public InvalidDependency()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InvalidDependency(Guid InvalidDependencyId)
		{
			Entity = new Entity(EntityLogicalName, InvalidDependencyId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InvalidDependency(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InvalidDependency(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InvalidDependency(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public InvalidDependency(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the object that has an invalid dependency</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Existing Object Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ExistingComponentId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ExistingComponentId); }
		}

		/// <summary>
		/// <para>Component type of the object that has an invalid dependency</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Existing Object's Component Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets.ExistingComponentType? ExistingComponentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ExistingComponentType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets.ExistingComponentType)value.Value;
			}
		}

		/// <summary>
		/// <para>The dependency type of the invalid dependency.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Weight</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets.ExistingDependencyType? ExistingDependencyType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ExistingDependencyType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets.ExistingDependencyType)value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the invalid dependency.</para>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para>Invalid Dependency Identifier</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid InvalidDependencyId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>Indicates whether the existing node is the required component in the dependency</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is this node the required component</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsExistingNodeRequiredComponent
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsExistingNodeRequiredComponent); }
		}

		/// <summary>
		/// <para>Unique identifier of the missing component.</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? MissingComponentId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.MissingComponentId); }
			set { Entity.Attributes[Fields.MissingComponentId] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - String - MaxLength: 1073741823</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MissingComponentInfo
		{
			get { return Entity.GetAttributeValue<string>(Fields.MissingComponentInfo); }
		}

		/// <summary>
		/// <para>The lookup type of the missing component.</para>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Lookup Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? MissingComponentLookupType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.MissingComponentLookupType); }
		}

		/// <summary>
		/// <para>The object type code of the missing component.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Type Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets.MissingComponentType? MissingComponentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.MissingComponentType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.InvalidDependencyOptionSets.MissingComponentType)value.Value;
			}
		}
	}
}