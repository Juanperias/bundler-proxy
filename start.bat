echo "Installing modules"
call npm install --no-audit --production
echo "Running proxy"
call npm start
pause
popd