module.exports = function (plop) {
  plop.setGenerator("components", {
    description: "React Component Generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../app/components/{{ pascalCase name }}/{{ pascalCase name }}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "../app/components/{{ pascalCase name }}/{{ pascalCase name }}.styles.ts",
        templateFile: "templates/styles.hbs",
      },
      {
        type: "add",
        path: "../app/components/{{ pascalCase name }}/__stories__/{{ pascalCase name }}.stories.tsx",
        templateFile: "templates/component-stories.hbs",
      },
      {
        type: "add",
        path: "../app/components/{{ pascalCase name }}/index.ts",
        templateFile: "templates/index.hbs",
      },
    ],
  });
};
