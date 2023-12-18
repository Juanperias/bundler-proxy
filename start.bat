echo "Installing modules"
call npm install --no-audit
echo "Running proxy"
call npm start
pause
popd