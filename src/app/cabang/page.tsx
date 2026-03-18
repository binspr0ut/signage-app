import { Button } from "@/components/ui/button";
import { CommandInput } from "@/components/ui/command";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";

export default function CabangPage() {
  const datas = [
    {
      id: "001",
      nama: "Cabang A",
      lokasi: "Jl. Dummy No. 1",
      token: "asdasdasd",
      lastUpdate: "25 September 2025",
    },
    {
      id: "002",
      nama: "Cabang B",
      lokasi: "Jl. Merpati No. 12",
      token: "asdasdasdasd",
      lastUpdate: "13 Agustus 2025",
    },
    {
      id: "003",
      nama: "Cabang C",
      lokasi: "Jl. Kenanga No. 5",
      token: "asdasdasdasd",
      lastUpdate: "09 Juli 2025",
    },
    {
      id: "004",
      nama: "Cabang D",
      lokasi: "Jl. Melati No. 88",
      token: "asdasdasdasd",
      lastUpdate: "02 Oktober 2025",
    },
    {
      id: "005",
      nama: "Cabang E",
      lokasi: "Jl. Anggrek No. 21",
      token: "asdasdasdasd",
      lastUpdate: "18 Mei 2025",
    },
  ];

  return (
    <div className="p-12 flex flex-col gap-4 max-w-screen">
      <h1 className="font-bold text-4xl">Kantor Cabang</h1>
      <Separator />
      <div className="flex w-full justify-between">
        <InputGroup className="max-w-sm">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus></Plus> Tambah Cabang
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Cabang</DialogTitle>
              <DialogDescription>
                Isi Data untuk tambah cabang
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableCaption>Tabel</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Nama Cabang</TableHead>
            <TableHead>Lokasi Cabang</TableHead>
            <TableHead>Token</TableHead>
            <TableHead>Last Update</TableHead>
            <TableHead>Action </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data, index) => (
            <TableRow key={data.id}>
              <TableCell>{index}</TableCell>
              <TableCell>{data.nama}</TableCell>
              <TableCell>{data.lokasi}</TableCell>
              <TableCell>{data.token}</TableCell>
              <TableCell>{data.lastUpdate}</TableCell>
              <TableCell>...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious></PaginationPrevious>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext></PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
