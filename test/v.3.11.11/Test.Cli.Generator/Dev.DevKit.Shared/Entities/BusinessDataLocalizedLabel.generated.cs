﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.BusinessDataLocalizedLabelOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class BusinessDataLocalizedLabel : EntityBase
	{
		public struct Fields
		{
			public const string BusinessDataLocalizedLabelId = "businessdatalocalizedlabelid";
			public const string Label = "label";
			public const string LanguageId = "languageid";
			public const string ObjectColumnName = "objectcolumnname";
			public const string ObjectColumnNumber = "objectcolumnnumber";
			public const string ObjectId = "objectid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "businessdatalocalizedlabel";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4232;

		[DebuggerNonUserCode()]
		public BusinessDataLocalizedLabel()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessDataLocalizedLabel(Guid BusinessDataLocalizedLabelId)
		{
			Entity = new Entity(EntityLogicalName, BusinessDataLocalizedLabelId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessDataLocalizedLabel(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessDataLocalizedLabel(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public BusinessDataLocalizedLabel(Entity entity, Entity merge)
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
		public BusinessDataLocalizedLabel(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the Business Data Localized Label.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid BusinessDataLocalizedLabelId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.BusinessDataLocalizedLabelId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Label</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Label
		{
			get { return Entity.GetAttributeValue<string>(Fields.Label); }
			set { Entity.Attributes[Fields.Label] = value; }
		}

		/// <summary>
		/// <para>Language Id</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? LanguageId
		{
			get { return Entity.GetAttributeValue<int?>(Fields.LanguageId); }
			set { Entity.Attributes[Fields.LanguageId] = value; }
		}

		/// <summary>
		/// <para>Object Column Name</para>
		/// <para>String - MaxLength: 128</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ObjectColumnName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ObjectColumnName); }
			set { Entity.Attributes[Fields.ObjectColumnName] = value; }
		}

		/// <summary>
		/// <para>Object Column Number</para>
		/// <para>ReadOnly - Integer - MinValue: 1 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ObjectColumnNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ObjectColumnNumber); }
		}

		/// <summary>
		/// <para>Object Id</para>
		/// <para>Lookup to </para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
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