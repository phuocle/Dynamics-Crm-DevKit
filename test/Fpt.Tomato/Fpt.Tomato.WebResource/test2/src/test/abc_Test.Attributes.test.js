//@ts-check
const loadExternalScripts = require('./jest-helper')
const fs = require('fs');
const path = require('path');
const xrmMock = require('xrm-mock');
const devKit = fs.readFileSync(path.resolve(__dirname, '../lib/devkit.js'), { encoding: 'utf-8' });
const abc_Test_form = fs.readFileSync(path.resolve(__dirname, '../entities/abc_Test.form.js'), { encoding: 'utf-8' });

describe('', () => {
  beforeAll(() => {
    loadExternalScripts([devKit, abc_Test_form]);
    var XrmMockGenerator = xrmMock.XrmMockGenerator.initialise();
    XrmMockGenerator.Panel = new xrmMock.PanelMock();
    XrmMockGenerator.Device = new xrmMock.DeviceMock();
    XrmMockGenerator.Navigation = new xrmMock.NavigationStaticMock();
  });
  describe('', () => {
    it('a', () => {
      xrmMock.XrmMockGenerator.Attribute.createString({
        attributeType: "string",
        format: "text",
        isDirty: true,
        name: "abc_all",
        requiredLevel: "required",
        value: "ABC ALL VALUE",
        maxLength: 100,
        submitMode: "always"
      },
        {
            controlType: "standard",
            disabled: true,
            label: "ABC ALL LABEL",
            name: "abc_all",
            visible: true
        }
      );
      var executionContext = xrmMock.XrmMockGenerator.formContext;
      var form = new Tomato.FormTest(executionContext);

      expect(form.Body.abc_All.Value).toBe("ABC ALL VALUE");

    });
  });
});
