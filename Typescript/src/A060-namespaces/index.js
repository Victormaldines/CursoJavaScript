/**
 * NAMESPACE
 * São "módulos" do Typescript, apesar de tudo, é altamente recomendado utilizar os sistema de módulos do ES6 (ES2015)
 */
/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.name = 'Ugabuga';
    // export ~> exporta para fora do escopo da namespace
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    MyNamespace.Person = Person;
    var person = new Person('Udyr');
    console.log(person);
    // Aninhando namespaces
    // para utilizar a namespace fora do escopo da "namespace pai", nesse caso, é preciso exportá-la
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.name = 'Liminha';
    })(OtherNamespace = MyNamespace.OtherNamespace || (MyNamespace.OtherNamespace = {}));
    console.log(OtherNamespace.name); // acessível sem export
})(MyNamespace || (MyNamespace = {}));
// const person1 = new Person('Udyr'); // ~> não existe fora do escopo da namespace MyNamespace
var person1 = new MyNamespace.Person('Garen');
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name + ' Fora do namespace.'); // acessível com export
var namespaceConst = 'value of namespace const';
/* eslint-disable @typescript-eslint/triple-slash-reference */
/**
 * NAMESPACES
 * Importando namespaces
 */
/// <reference path="modules/module.ts" />
console.log(MyNamespace.name);
console.log(namespaceConst);
