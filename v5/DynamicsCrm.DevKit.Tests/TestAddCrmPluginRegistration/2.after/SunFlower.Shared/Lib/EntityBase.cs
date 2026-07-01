using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace SunFlower.Shared
{
    [DebuggerNonUserCode()]
    internal abstract class EntityBase
    {
        protected T GetAliasedValue<T>(string name)
        {
            var aliased = Entity.GetAttributeValue<AliasedValue>(name);
            if (aliased == null) return default(T);
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, (Guid)aliased.Value);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference)
                return (T)(object)((EntityReference)aliased.Value).Id;
            return (T)aliased.Value;
        }

        public Entity Entity { get; set; }
        protected Entity PreEntity { get; set; }
        public Guid Id { get { return Entity.Id; } }
        public string LogicalName { get { return Entity.LogicalName; } }
        protected object CloneAttribute(object value)
        {
            if (value == null)
            {
                return null;
            }
            var stringValue = value as string;
            if (stringValue != null)
            {
                return new string(stringValue.ToCharArray());
            }
            var optionSetValue = value as OptionSetValue;
            if (optionSetValue != null)
            {
                return new OptionSetValue(optionSetValue.Value);
            }
            var optionSetValueCollection = value as OptionSetValueCollection;
            if (optionSetValueCollection != null)
            {
                return new OptionSetValueCollection(optionSetValueCollection);
            }
            var entityReferenceValue = value as EntityReference;
            if (entityReferenceValue != null)
            {
                return new EntityReference
                {
                    LogicalName = CloneAttribute(entityReferenceValue?.LogicalName) as string,
                    Id = entityReferenceValue.Id,
                    Name = CloneAttribute(entityReferenceValue?.Name) as string
                };
            }
            var booleanManagedValue = value as BooleanManagedProperty;
            if (booleanManagedValue != null)
            {
                return new BooleanManagedProperty(booleanManagedValue.Value);
            }
            var moneyValue = value as Money;
            if (moneyValue != null)
            {
                return new Money(moneyValue.Value);
            }
            var aliasedValue = value as AliasedValue;
            if (aliasedValue != null)
            {
                return new AliasedValue(CloneAttribute(aliasedValue.EntityLogicalName) as string,
                    CloneAttribute(aliasedValue.AttributeLogicalName) as string,
                    CloneAttribute(aliasedValue.Value));
            }
            var entityCollectionValue = value as EntityCollection;
            if (entityCollectionValue != null)
            {
                return new EntityCollection(entityCollectionValue.Entities.Select(CloneThisEntity).ToList());
            }
            var byteArrayValue = value as byte[];
            if (byteArrayValue != null)
            {
                var clone = new byte[byteArrayValue.Length];
                Array.Copy(byteArrayValue, clone, byteArrayValue.Length);
                return clone;
            }
            if (value.GetType().IsValueType || value.GetType().IsEnum)
            {
                return value;
            }
            throw new InvalidDataException("Attribute of type '" + value.GetType().Name + "' is not supported yet. Please file an issue on GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit");
        }

        protected Entity CloneThisEntity(Entity entity)
        {
            var clone = new Entity
            {
                Id = entity.Id,
                LogicalName = entity.LogicalName
            };
            foreach (var attribute in entity.Attributes)
            {
                clone[attribute.Key] = CloneAttribute(attribute.Value);
            }
            return clone;
        }

        public Entity GetCreateEntity()
        {
            return this.Entity;
        }

        public Entity GetUpdateEntity([System.Runtime.CompilerServices.CallerMemberName] string caller = "")
        {
            if (Entity.Id == Guid.Empty) throw new InvalidPluginExecutionException($"Update {Entity.LogicalName} without Guid. Caller: {caller}");
            var update = new Entity(Entity.LogicalName);
            update.Id = Entity.Id;
            foreach (var property in Entity.Attributes)
            {
                var key = property.Key;
                var value = property.Value;
                if (!PreEntity.Attributes.ContainsKey(key))
                {
                    update[key] = value;
                }
                else if (!AttributeEquals(PreEntity[key], Entity[key]))
                {
                    update[key] = value;
                }
            }
            if (update.Attributes.Count == 0) throw new InvalidPluginExecutionException($"Update {Entity.LogicalName} without attributes. Caller: {caller}");
            return update;
        }

        protected bool AttributeEquals(object a, object b)
        {
            if (a == null && b == null) return true;
            if (a == null || b == null) return false;
            if (a is OptionSetValue osv1 && b is OptionSetValue osv2)
                return osv1.Value == osv2.Value;
            if (a is Money m1 && b is Money m2)
                return m1.Value == m2.Value;
            if (a is EntityReference er1 && b is EntityReference er2)
                return er1.Id == er2.Id && er1.LogicalName == er2.LogicalName;
            if (a is BooleanManagedProperty bmp1 && b is BooleanManagedProperty bmp2)
                return bmp1.Value == bmp2.Value;
            if (a is OptionSetValueCollection osvc1 && b is OptionSetValueCollection osvc2)
                return osvc1.Count == osvc2.Count && osvc1.All(x => osvc2.Any(y => y.Value == x.Value));
            if (a is byte[] ba1 && b is byte[] ba2)
                return ba1.Length == ba2.Length && ba1.SequenceEqual(ba2);
            return object.Equals(a, b);
        }

        public EntityReference ToEntityReference()
        {
            if (Entity == null || Entity.Id == Guid.Empty) return null;
            return Entity.ToEntityReference();
        }

        public bool Contains(string field)
        {
            return this.Entity.Contains(field);
        }

        public void Remove(string field)
        {
            this.Entity.Attributes.Remove(field);
        }

        public bool Exist()
        {
            if (Entity == null || Entity.Id == Guid.Empty) return false;
            return true;
        }
    }
}
