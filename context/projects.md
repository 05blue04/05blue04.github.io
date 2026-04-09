Stratos AI Video processing tool
    -Stratos is an open-source, AI-enhanced video processing platform built as part of Purdue's ECE 49595O Senior Design course. The system is split across three independent services the frontend, backend, and AI service enabling independent scaling and clean separation of concerns.

I designed and built the backend service using TypeScript and Bun, including REST API design, video upload and storage, FFmpeg-based processing pipeline, and a job queue for handling asynchronous video tasks. I also contributed to Whisper model integration for AI-driven transcription, bridging the backend and AI service.

Stratos supports transcription, slow motion, frame interpolation, and subtitle generation, accessible through a clean Svelte frontend designed for both technical and non-technical users.

The platform is fully containerized with Docker and a CI pipeline built on GitHub Actions for automated testing and deployment. PostgreSQL handles persistence for user, task, and video metadata.

Poneglyph API
-A RESTful API for the One Piece universe built with Go and PostgreSQL. Explore characters, devil fruits, and pirate crews with advanced search, filtering, and pagination capabilities.

Features ✨
REST API with OpenAPI 3.0 specification
IP-based rate limiting for fair usage and abuse prevention
Endpoints for characters, devil fruits, and crews with full CRUD support
Built-in pagination, filtering, and sorting
Validated input with clear error responses
Custom API key authentication
API metrics including request/response counts and processing times
Architecture 🌇
Language: Go 1.25
Database: PostgreSQL with full-text search capabilities
Migration: Goose migration tool
Authentication: Custom API key middleware
Rate Limiting: Token bucket algorithm with IP tracking

Chess game 
Complete chess rules implementation
10x12 mailbox board representation
Legal move validation for all pieces
Castling (kingside and queenside)
En passant captures
Pawn promotion (auto-promotes to queen)
Check, checkmate, and stalemate detection
FEN string parsing for custom positions
Clean GUI with piece highlighting
Dependencies
raylib - Graphics library
GCC compiler
Linux (X11)
Installing raylib on Ubuntu/Debian
sudo apt install libraylib-dev
Or build from source:

git clone https://github.com/raysan5/raylib.git
cd raylib/src
make PLATFORM=PLATFORM_DESKTOP
sudo make install
Building
make
Running
# Start a new game
./chess

# Load a position from FEN string
./chess --fen "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1"

# Run tests
./chess --test

# Show help
./chess --help
How to Play
Click on a piece to select it
Click on a destination square to move
Invalid moves are rejected automatically
Use the "Reset Game" button to start over

Chip8 Emulator
Built a fully functional emulator for the CHIP‑8 virtual machine in C++, capable of running classic programs originally designed for early microcomputers like the COSMAC VIP and Telmac 1800.

Key features include:

Implemented the full CHIP-8 instruction set, including arithmetic, control flow, memory operations, and display instructions
Designed a virtual CPU architecture with registers, program counter, stack, timers, and 4KB memory model
Developed a 64×32 monochrome graphics renderer with sprite drawing and collision detection
Implemented a fetch–decode–execute CPU cycle to emulate instruction execution
Built a keypad input system mapping modern keyboard input to the CHIP-8 hex keypad
Integrated delay and sound timers to replicate original hardware behavior
Added ROM loading functionality to run classic CHIP-8 games and demos

Technologies: C++, low-level memory management, SDL

