﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Xyz.LuckyMokey.Shared.Entities.DependencyNodeOptionSets
{
	public enum ComponentType
	{
		/// <summary>
		/// Entity = 1
		/// </summary>
		Entity = 1,
		/// <summary>
		/// Attribute = 2
		/// </summary>
		Attribute = 2,
		/// <summary>
		/// Relationship = 3
		/// </summary>
		Relationship = 3,
		/// <summary>
		/// Attribute_Picklist_Value = 4
		/// </summary>
		Attribute_Picklist_Value = 4,
		/// <summary>
		/// Attribute_Lookup_Value = 5
		/// </summary>
		Attribute_Lookup_Value = 5,
		/// <summary>
		/// View_Attribute = 6
		/// </summary>
		View_Attribute = 6,
		/// <summary>
		/// Localized_Label = 7
		/// </summary>
		Localized_Label = 7,
		/// <summary>
		/// Relationship_Extra_Condition = 8
		/// </summary>
		Relationship_Extra_Condition = 8,
		/// <summary>
		/// Option_Set = 9
		/// </summary>
		Option_Set = 9,
		/// <summary>
		/// Entity_Relationship = 10
		/// </summary>
		Entity_Relationship = 10,
		/// <summary>
		/// Entity_Relationship_Role = 11
		/// </summary>
		Entity_Relationship_Role = 11,
		/// <summary>
		/// Entity_Relationship_Relationships = 12
		/// </summary>
		Entity_Relationship_Relationships = 12,
		/// <summary>
		/// Managed_Property = 13
		/// </summary>
		Managed_Property = 13,
		/// <summary>
		/// Entity_Key = 14
		/// </summary>
		Entity_Key = 14,
		/// <summary>
		/// Privilege = 16
		/// </summary>
		Privilege = 16,
		/// <summary>
		/// PrivilegeObjectTypeCode = 17
		/// </summary>
		PrivilegeObjectTypeCode = 17,
		/// <summary>
		/// Role = 20
		/// </summary>
		Role = 20,
		/// <summary>
		/// Role_Privilege = 21
		/// </summary>
		Role_Privilege = 21,
		/// <summary>
		/// Display_String = 22
		/// </summary>
		Display_String = 22,
		/// <summary>
		/// Display_String_Map = 23
		/// </summary>
		Display_String_Map = 23,
		/// <summary>
		/// Form = 24
		/// </summary>
		Form = 24,
		/// <summary>
		/// Organization = 25
		/// </summary>
		Organization = 25,
		/// <summary>
		/// Saved_Query = 26
		/// </summary>
		Saved_Query = 26,
		/// <summary>
		/// Workflow = 29
		/// </summary>
		Workflow = 29,
		/// <summary>
		/// Report = 31
		/// </summary>
		Report = 31,
		/// <summary>
		/// Report_Entity = 32
		/// </summary>
		Report_Entity = 32,
		/// <summary>
		/// Report_Category = 33
		/// </summary>
		Report_Category = 33,
		/// <summary>
		/// Report_Visibility = 34
		/// </summary>
		Report_Visibility = 34,
		/// <summary>
		/// Attachment = 35
		/// </summary>
		Attachment = 35,
		/// <summary>
		/// Email_Template = 36
		/// </summary>
		Email_Template = 36,
		/// <summary>
		/// Contract_Template = 37
		/// </summary>
		Contract_Template = 37,
		/// <summary>
		/// KB_Article_Template = 38
		/// </summary>
		KB_Article_Template = 38,
		/// <summary>
		/// Mail_Merge_Template = 39
		/// </summary>
		Mail_Merge_Template = 39,
		/// <summary>
		/// Duplicate_Rule = 44
		/// </summary>
		Duplicate_Rule = 44,
		/// <summary>
		/// Duplicate_Rule_Condition = 45
		/// </summary>
		Duplicate_Rule_Condition = 45,
		/// <summary>
		/// Entity_Map = 46
		/// </summary>
		Entity_Map = 46,
		/// <summary>
		/// Attribute_Map = 47
		/// </summary>
		Attribute_Map = 47,
		/// <summary>
		/// Ribbon_Command = 48
		/// </summary>
		Ribbon_Command = 48,
		/// <summary>
		/// Ribbon_Context_Group = 49
		/// </summary>
		Ribbon_Context_Group = 49,
		/// <summary>
		/// Ribbon_Customization = 50
		/// </summary>
		Ribbon_Customization = 50,
		/// <summary>
		/// Ribbon_Rule = 52
		/// </summary>
		Ribbon_Rule = 52,
		/// <summary>
		/// Ribbon_Tab_To_Command_Map = 53
		/// </summary>
		Ribbon_Tab_To_Command_Map = 53,
		/// <summary>
		/// Ribbon_Diff = 55
		/// </summary>
		Ribbon_Diff = 55,
		/// <summary>
		/// Saved_Query_Visualization = 59
		/// </summary>
		Saved_Query_Visualization = 59,
		/// <summary>
		/// System_Form = 60
		/// </summary>
		System_Form = 60,
		/// <summary>
		/// Web_Resource = 61
		/// </summary>
		Web_Resource = 61,
		/// <summary>
		/// Site_Map = 62
		/// </summary>
		Site_Map = 62,
		/// <summary>
		/// Connection_Role = 63
		/// </summary>
		Connection_Role = 63,
		/// <summary>
		/// Complex_Control = 64
		/// </summary>
		Complex_Control = 64,
		/// <summary>
		/// Field_Security_Profile = 70
		/// </summary>
		Field_Security_Profile = 70,
		/// <summary>
		/// Field_Permission = 71
		/// </summary>
		Field_Permission = 71,
		/// <summary>
		/// Plugin_Type = 90
		/// </summary>
		Plugin_Type = 90,
		/// <summary>
		/// Plugin_Assembly = 91
		/// </summary>
		Plugin_Assembly = 91,
		/// <summary>
		/// SDK_Message_Processing_Step = 92
		/// </summary>
		SDK_Message_Processing_Step = 92,
		/// <summary>
		/// SDK_Message_Processing_Step_Image = 93
		/// </summary>
		SDK_Message_Processing_Step_Image = 93,
		/// <summary>
		/// Service_Endpoint = 95
		/// </summary>
		Service_Endpoint = 95,
		/// <summary>
		/// Routing_Rule = 150
		/// </summary>
		Routing_Rule = 150,
		/// <summary>
		/// Routing_Rule_Item = 151
		/// </summary>
		Routing_Rule_Item = 151,
		/// <summary>
		/// SLA = 152
		/// </summary>
		SLA = 152,
		/// <summary>
		/// SLA_Item = 153
		/// </summary>
		SLA_Item = 153,
		/// <summary>
		/// Convert_Rule = 154
		/// </summary>
		Convert_Rule = 154,
		/// <summary>
		/// Convert_Rule_Item = 155
		/// </summary>
		Convert_Rule_Item = 155,
		/// <summary>
		/// Hierarchy_Rule = 65
		/// </summary>
		Hierarchy_Rule = 65,
		/// <summary>
		/// Mobile_Offline_Profile = 161
		/// </summary>
		Mobile_Offline_Profile = 161,
		/// <summary>
		/// Mobile_Offline_Profile_Item = 162
		/// </summary>
		Mobile_Offline_Profile_Item = 162,
		/// <summary>
		/// Similarity_Rule = 165
		/// </summary>
		Similarity_Rule = 165,
		/// <summary>
		/// Custom_Control = 66
		/// </summary>
		Custom_Control = 66,
		/// <summary>
		/// Custom_Control_Default_Config = 68
		/// </summary>
		Custom_Control_Default_Config = 68,
		/// <summary>
		/// Data_Source_Mapping = 166
		/// </summary>
		Data_Source_Mapping = 166,
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
		/// WebWizard = 210
		/// </summary>
		WebWizard = 210,
		/// <summary>
		/// Index = 18
		/// </summary>
		Index = 18,
		/// <summary>
		/// Import_Map = 208
		/// </summary>
		Import_Map = 208,
		/// <summary>
		/// Canvas_App = 300
		/// </summary>
		Canvas_App = 300,
		/// <summary>
		/// Connector_371 = 371
		/// </summary>
		Connector_371 = 371,
		/// <summary>
		/// Connector_372 = 372
		/// </summary>
		Connector_372 = 372,
		/// <summary>
		/// Environment_Variable_Definition = 380
		/// </summary>
		Environment_Variable_Definition = 380,
		/// <summary>
		/// Environment_Variable_Value = 381
		/// </summary>
		Environment_Variable_Value = 381,
		/// <summary>
		/// AI_Project_Type = 400
		/// </summary>
		AI_Project_Type = 400,
		/// <summary>
		/// AI_Project = 401
		/// </summary>
		AI_Project = 401,
		/// <summary>
		/// AI_Configuration = 402
		/// </summary>
		AI_Configuration = 402,
		/// <summary>
		/// Entity_Analytics_Configuration = 430
		/// </summary>
		Entity_Analytics_Configuration = 430,
		/// <summary>
		/// Attribute_Image_Configuration = 431
		/// </summary>
		Attribute_Image_Configuration = 431,
		/// <summary>
		/// Entity_Image_Configuration = 432
		/// </summary>
		Entity_Image_Configuration = 432
	}
}

namespace Xyz.LuckyMokey.Shared.Entities
{
	public partial class DependencyNode : EntityBase
	{
		public struct Fields
		{
			public const string BaseSolutionId = "basesolutionid";
			public const string ComponentType = "componenttype";
			public const string DependencyNodeId = "dependencynodeid";
			public const string IntroducedVersion = "introducedversion";
			public const string IsSharedComponent = "issharedcomponent";
			public const string ObjectId = "objectid";
			public const string ParentId = "parentid";
			public const string TopSolutionId = "topsolutionid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "dependencynode";

		public const int EntityTypeCode = 7106;

		[DebuggerNonUserCode()]
		public DependencyNode()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyNode(Guid DependencyNodeId)
		{
			Entity = new Entity(EntityLogicalName, DependencyNodeId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyNode(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyNode(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public DependencyNode(Entity entity, Entity merge)
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
		public DependencyNode(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the solution</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Base Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference BaseSolutionId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.BaseSolutionId); }
		}

		/// <summary>
		/// <para>The type code of the component.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Type Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.DependencyNodeOptionSets.ComponentType? ComponentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentType);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.DependencyNodeOptionSets.ComponentType)value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the dependency node.</para>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para>Dependency Node Identifier</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid DependencyNodeId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>Introduced version for the component</para>
		/// <para>Double - MinValue: 0 - MaxValue: 100</para>
		/// <para>Introduced Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? IntroducedVersion
		{
			get { return Entity.GetAttributeValue<double?>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}

		/// <summary>
		/// <para>Whether this component is shared by two solutions with the same publisher.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Shared Component</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsSharedComponent
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsSharedComponent); }
		}

		/// <summary>
		/// <para>Unique identifier of the object with which the node is associated.</para>
		/// <para>Required - Uniqueidentifier</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the parent entity.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Parent Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ParentId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ParentId); }
		}

		/// <summary>
		/// <para>Unique identifier of the top solution.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Top Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TopSolutionId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TopSolutionId); }
		}

		/// <summary>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}