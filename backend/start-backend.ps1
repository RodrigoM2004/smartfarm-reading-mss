# Lista de diretórios onde o comando será executado
$folders = @(
    "user_mss",
    "sensor_mss",
    "reading_mss",
    "view_mss",
    "event_bus"
)

# Diretório base (o diretório atual onde o script é executado)
$basePath = Get-Location

foreach ($folder in $folders) {
    $fullPath = Join-Path $basePath $folder
    if (Test-Path $fullPath) {
        Write-Host "Iniciando 'npm run dev' em $folder..."
        Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd `"$fullPath`"; npm run dev"
    } else {
        Write-Warning "Diretório não encontrado: $folder"
    }
}