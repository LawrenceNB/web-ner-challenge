default:
	@echo "An explicit target is required"

install:
	cd angular-frontend && npm install
	cd flask-backend && pip install -r requirements.txt

frontend start:
	cd angular-frontend && npm start

backend start:
	cd flask-backend && flask run