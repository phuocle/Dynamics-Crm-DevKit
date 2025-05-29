		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
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
			const getValue = function () {
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
			const returnGet = function (data, type) {
				const parseDate = function (dateString) {
					const timestamp = Date.parse(dateString);
					if (isNaN(timestamp)) {
						return null;
					}
					return new Date(timestamp);
				};
				const parseBoolean = function (booleanString) {
					if (typeof booleanString !== 'string') return false;
					const lowerStr = booleanString?.trim()?.toLowerCase();
					const trueValues = ["true", "1", "yes", "y"];
					const falseValues = ["false", "0", "no", "n"];
					if (trueValues.includes(lowerStr)) {
						return true;
					}
					if (falseValues.includes(lowerStr)) {
						return false;
					}
					return false;
				};
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				if (type === "DateTime") {
					const date = parseDate(data);
					return isNaN(date?.getTime()) ? null : date;
				}
				else if (type === "Integer") {
					const int = parseInt(data, 10);
					return isNaN(int) ? null : int;
				}
				else if (type === "Number") {
					const double = Number(data);
					return isNaN(double) ? null : double;
				}
				else if (type === "Boolean") {
					return parseBoolean(data);
				}
				return data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
