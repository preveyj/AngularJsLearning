angular.module('nameListApp', [])
    .controller('NameListController', function() {
        var nameList = this;
        nameList.names = [
            { name: 'Alice', greeted: true},
            { name: 'Bob', greeted: false}            
        ];

        nameList.addName = function () {
            nameList.names.push({ name: nameList.nameText, greeted: false });
            todoList.nameText = '';
        };

        nameList.toBeGreeted = function() {
            var count = 0;
            angular.forEach(nameList.names, function(name) {
                count += name.greeted ? 0 : 1;
                //add to the count one for each name not greeted
            });
            return count;
        };

        nameList.archive = function() {
            var oldNames = nameList.names;
            nameList.names = [];
            angular.forEach(oldNames, function(oldName) {
                if (!oldName.greeted) nameList.names.push(oldName);
                //don't archive ungreeted names
            });
        };
    });