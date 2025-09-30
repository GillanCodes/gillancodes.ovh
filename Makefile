build:
	rm -fr ./dist/; npm run build; make create_dir; mkdir dist/app; make move_server; make move_client; make move_common; make move_packages; make install_deps; make move_env

create_dir:
	mkdir -p ./dist/app/uploads/

move_server:
	cp -r ./server/dist/src/ ./dist/app/src/ 

move_client: 
	cp -r ./client/dist/ ./dist/app/client/

move_common:
	cp -r ./common/ ./dist/

move_packages:
	cp ./package.json ./dist/package.json

install_deps:
	cd ./dist/; npm i; cd -

move_env:
	cp .env_default ./dist/app/src/.env
