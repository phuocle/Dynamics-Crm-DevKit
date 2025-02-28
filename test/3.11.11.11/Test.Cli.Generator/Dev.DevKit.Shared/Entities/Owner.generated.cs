﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.OwnerOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Owner : EntityBase
	{
		public struct Fields
		{
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string VersionNumber = "versionnumber";
			public const string YomiName = "yominame";
		}

		public const string EntityLogicalName = "owner";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 7;

		[DebuggerNonUserCode()]
		public Owner()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Owner(Guid OwnerId)
		{
			Entity = new Entity(EntityLogicalName, OwnerId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Owner(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Owner(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public Owner(Entity entity, Entity merge)
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
		public Owner(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Name of the Owner.</para>
		/// <para>ReadOnly - Required - String - MaxLength: 160</para>
		/// <para>Owner Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
		}

		/// <summary>
		/// <para>Unique identifier for the Owner: systemuserid or teamid.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid OwnerId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.OwnerId] = value;
				Entity.Id = value;
			}
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

		/// <summary>
		/// <para>Pronunciation of the name of the owner, written in phonetic hiragana or katakana characters.</para>
		/// <para>ReadOnly - String - MaxLength: 160</para>
		/// <para>Yomi Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string YomiName
		{
			get { return Entity.GetAttributeValue<string>(Fields.YomiName); }
		}
	}
}
