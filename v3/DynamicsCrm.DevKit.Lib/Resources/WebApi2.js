		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			var getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			var returnGet = function (data, type) {
				var parseDate = function (dateString) {
					const date = new Date(dateString);
					if (isNaN(date?.getTime())) {
						return null;
					} else {
						return date;
					}
				}
				var parseBoolean = function (booleanString) {
					if (typeof booleanString !== 'string') return false;
					const lowerStr = booleanString?.trim()?.toLowerCase();
					const trueValues = ["true", "1", "yes", "y"];
					const falseValues = ["false", "0", "no", "n"];
					if (trueValues?.includes(lowerStr)) {
						return true;
					} else if (falseValues?.includes(lowerStr)) {
						return false;
					} else {
						return false;
					}
				};
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				if (type === "DateTime") {
					const date = parseDate(data);
					if (isNaN(date?.getTime())) return null;
					return date;
				}
				else if (type === "Integer") {
					const int = parseInt(data);
					if (isNaN(int)) return null;
					return int;
				}
				else if (type === "Number") {
					const double = Number(data);
					if (isNaN(double)) return null;
					return double;
				}
				else if (type === "Boolean") {
					return parseBoolean(data);
				}
				return data;
			}
			var setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value?.replace('{', '')?.replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
