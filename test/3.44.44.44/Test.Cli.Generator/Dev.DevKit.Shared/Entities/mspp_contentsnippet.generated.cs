﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:42
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets
{
	public enum mspp_type
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: HTML</para>
		/// <para><strong>Value</strong>: 756,150,001</para>
		/// </summary>
		HTML = 756_150_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Text</para>
		/// <para><strong>Value</strong>: 756,150,000</para>
		/// </summary>
		Text = 756_150_000
	}
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Active = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Inactive = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Active = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class mspp_contentsnippet : EntityBase
	{
		public struct Fields
		{
			public const string mspp_contentsnippetId = "mspp_contentsnippetid";
			public const string mspp_contentsnippetlanguageid = "mspp_contentsnippetlanguageid";
			public const string mspp_createdby = "mspp_createdby";
			public const string mspp_createdbyipaddress = "mspp_createdbyipaddress";
			public const string mspp_createdbyusername = "mspp_createdbyusername";
			public const string mspp_createdon = "mspp_createdon";
			public const string mspp_display_name = "mspp_display_name";
			public const string mspp_modifiedby = "mspp_modifiedby";
			public const string mspp_modifiedbyipaddress = "mspp_modifiedbyipaddress";
			public const string mspp_modifiedbyusername = "mspp_modifiedbyusername";
			public const string mspp_modifiedon = "mspp_modifiedon";
			public const string mspp_name = "mspp_name";
			public const string mspp_type = "mspp_type";
			public const string mspp_value = "mspp_value";
			public const string mspp_websiteid = "mspp_websiteid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
		}
		public const string EntityLogicalName = "mspp_contentsnippet";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10320;
		public const string EntityCollectionSchemaName = "mspp_contentsnippets";
		public const string EntityDisplayCollectionName = "Content Snippets";
		public const string DisplayName = "Content Snippet";
		public const string EntitySetName = "mspp_contentsnippets";
		public const string EntityLogicalCollectionName = "mspp_contentsnippets";
		public const string EntityPrimaryIdAttribute = "mspp_contentsnippetid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "mspp_name";
		public const string EntitySchemaName = "mspp_contentsnippet";
		[DebuggerNonUserCode()]
		public mspp_contentsnippet()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public mspp_contentsnippet(Guid mspp_contentsnippetId)
		{
			Entity = new Entity(EntityLogicalName, mspp_contentsnippetId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public mspp_contentsnippet(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="mspp_contentsnippet"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public mspp_contentsnippet(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="mspp_contentsnippet"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public mspp_contentsnippet(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new mspp_contentsnippet(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="mspp_contentsnippet"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public mspp_contentsnippet(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new mspp_contentsnippet(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public mspp_contentsnippet(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Content Snippet</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid mspp_contentsnippetId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.mspp_contentsnippetId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Content Snippet Language</para>
		/// <para><strong>Description</strong>: Option to make content snippets language specific</para>
		/// <para><strong>Lookup</strong>: <see cref="mspp_websitelanguage"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_contentsnippetlanguageid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_contentsnippetlanguageid); }
			set { Entity.Attributes[Fields.mspp_contentsnippetlanguageid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Shows who created the record.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_createdby
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_createdby); }
			set { Entity.Attributes[Fields.mspp_createdby] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By IP Address</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_createdbyipaddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_createdbyipaddress); }
			set { Entity.Attributes[Fields.mspp_createdbyipaddress] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By Username</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_createdbyusername
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_createdbyusername); }
			set { Entity.Attributes[Fields.mspp_createdbyusername] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was created.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? mspp_createdonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.mspp_createdon); }
			set { Entity.Attributes[Fields.mspp_createdon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Display Name</para>
		/// <para><strong>Description</strong>: Stores the label that is shown on the user interface (UI) in the data editing mode.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_display_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_display_name); }
			set { Entity.Attributes[Fields.mspp_display_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Shows who last updated the record.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_modifiedby
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_modifiedby); }
			set { Entity.Attributes[Fields.mspp_modifiedby] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By IP Address</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_modifiedbyipaddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_modifiedbyipaddress); }
			set { Entity.Attributes[Fields.mspp_modifiedbyipaddress] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By Username</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_modifiedbyusername
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_modifiedbyusername); }
			set { Entity.Attributes[Fields.mspp_modifiedbyusername] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was modified.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? mspp_modifiedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.mspp_modifiedon); }
			set { Entity.Attributes[Fields.mspp_modifiedon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_name); }
			set { Entity.Attributes[Fields.mspp_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.mspp_type"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.mspp_type.Text"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.mspp_type? mspp_type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.mspp_type);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.mspp_type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.mspp_type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.mspp_type] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Value</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,048,576</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string mspp_value
		{
			get { return Entity.GetAttributeValue<string>(Fields.mspp_value); }
			set { Entity.Attributes[Fields.mspp_value] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Website</para>
		/// <para><strong>Description</strong>: Unique identifier for Website associated with Content Snippet.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="mspp_website"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_websiteid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_websiteid); }
			set { Entity.Attributes[Fields.mspp_websiteid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Content Snippet</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.statecode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statecode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statecode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Content Snippet</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.mspp_contentsnippetOptionSets.statuscode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statuscode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statuscode] = null;
			}
		}
	}
}