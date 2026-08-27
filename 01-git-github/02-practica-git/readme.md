
# RESPUESTAS EJERCICIO 1

**¿Qué comando utilizaste en el paso 11? ¿Por qué?**
Usé el comando `git reset –hard HEAD~1` porque, a diferencia de `git reset HEAD~1`, la inclusión de *–hard* también deshace los respectivos cambios del working copy

**¿Qué comando o comandos utilizaste en el paso 12? ¿Por qué?**
Esta es la secuencia de comandos que usé:
`git reflog` para recuperar el rastro de commits y obtener el identificador del commit cuyo resumen indicaba las modificaciones con sintaxis markdown
`git reset –hard 1e86b27` para recuperar el commit y los respectivos cambios del working copy

**El merge del paso 13, ¿Causó algún conflicto? ¿Por qué?**
En este caso, no se puede hacer merge con *master*. El motivo es que la rama *master* solo tiene un commit inicial que comparte con la rama *styled*. Al contrario si hubiera sido posible: *master* si podría hacer merge con *styled* , que habría sido de tipo fast forward porque ambas ramas forman una lista .

**El merge del paso 19, ¿Causó algún conflicto? ¿Por qué?**
Sí, el merge de *htmlify* en *styled* creó un conflicto debido a que ambas contenían en mismo archivo con cambios en todas las líneas. El conflicto se resolvió borrando el texto perteneciente a *htmlify* para mantener íntegramente el contenido de *styled*.

**El merge del paso 21, ¿Causó algún conflicto? ¿Por qué?**
No se generó ningún conflicto porque el archivo común a ambas ramas no tenía cambios realizados en una de ellas (*master*). Fue un merge fast forward porque ambas ramas formaban una lista.

**¿Qué comando o comandos utilizaste en el paso 25?**
Al principio de la práctica, cree el siguiente alias:
`git config alias.graph "log --graph --decorate --pretty=oneline"`
De este modo, para dibujar el diagrama usé el siguiente comando:
`git graph`

**El merge del paso 26, ¿Podría ser fast forward? ¿Por qué?**
Si, podría ser fas forward porque, en el momento de hacer el merge, *tltle* solo tenía un commit por encima del último commit de *master*, es decir, formaban una lista.

**¿Qué comando o comandos utilizaste en el paso 27?**
Utilicé el comando `git reset HEAD~1` para evitar que se perdieran los cambios del working copy.

**¿Qué comando o comandos utilizaste en el paso 28?**
En primer lugar, hice `git status` para verificar la situación. A continuación, hice `cat git-nuestro.md` para comprobar que, efectivamente, en el paso anterior se habían mantenido los cambios del working copy (el archivo contenía el título que se añadió en un commit de *title*). Para descartar estos cambios, utilicé el comando `git restore git-nuestro.md` y, por último, comprobé mediante `cat git-nuestro.md` que el archivo ya no contenía el título.

**¿Qué comando o comandos utilizaste en el paso 29?**
Utilicé el comando `git branch -D title` y comprobé que se había llevado a cabo listando las ramas con `git branch`

**¿Qué comando o comandos utilizaste en el paso 30?**
En primer lugar, usé `git reflog` para encontrar el identificador del commit del merge. Una vez localizado, usé el comando `git reset –hard 5f2e0e8` para que, al rehacer el merge, tanto el working copy como el repositorio queden con los mismos archivos(git-nuestro recuperará el título)

**¿Qué comando o comandos usaste en el paso 32?**
Usé `git reflog` para encontrar el identificador del primer commit y luego `git checkout dba8f37`

**¿Qué comando o comandos usaste en el punto 33?**
Usé `git reflog` para encontrar el identificador del merge de *title* en *master* y luego `git checkout 5f2e0e8`


