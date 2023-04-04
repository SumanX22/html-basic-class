class Human {
    String name;
    String surname;
    int age;
    boolean isFemale;

    Human(String name, String surname, int age, boolean isFemale) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isFemale = isFemale;
    }
}



class MainWala {

    public static void main(String[] args) {
        Human newHuman = new Human("Udita", "Chatterjee", 22, true); // Object creation


        /*
         * How object is represented in JSON
         * 
         * {
         * "name": "Udita",
         * "surname": "Chatterjee",
         * "age": 22,
         * "isFemale": true
         * }        
         * 
        */
        System.out.println(newHuman.surname);
    }

}