(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActionBioById( id: string ) {
        console.log({ id });
    }
    
    interface movieI {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    // Crear una película
    function createMovie( {title, description, rating, cast } : movieI ) {
        console.log({ title, description, rating, cast });
    }
    function checkFullName(fullName: string) {
        console.log(fullName);
        return true
        
    }
    // Crea un nuevo actor
    function createActorActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( !checkFullName(fullName) ) return false;

        console.log('Crear actor', {fullName,birthdate});
        return true;        

    }

    // Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
     
        if ( isDead ) 
            return 1500;
       
        if ( isSeparated ) 
            return 2500;
           
        return ( isRetired ) ? 3000 : 4000; 

    }


})();